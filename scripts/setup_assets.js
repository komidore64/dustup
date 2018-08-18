const {
  exec,
  execSync,
} = require('child_process');
const path = require('path');

process.argv.shift(); // node
process.argv.shift(); // script

const manifest_filepath = path.resolve(process.argv.shift());
console.log(`image manifest: ${manifest_filepath}`);

const manifest = require(manifest_filepath);

function shellOut(cmd) {
  const commandPrefix = 'cmd: ';
  const outputPrefix  = '-->  ';

  console.log(commandPrefix, cmd);
  const output = execSync(cmd).toString();
  output.split('\n').forEach((line) => {
    console.log(outputPrefix, line);
  });
  return output;
}

function syncAnnexedFile(file) {
  console.log(`${file}: syncing from annex web remote`);
  shellOut(`git annex get ${file}`);
}

Object.keys(manifest).forEach((file) => {
  let annexURL = manifest[file];
  let whereis = shellOut(`git annex whereis ${file}`);

  if (whereis.includes('web:')) {
    if (whereis.includes(`web: ${annexURL}`)) {
      syncAnnexedFile(file);
      return; // move on to the next file because this one is all good
    } else {
      console.log(`${file}: annex web remote mismatch`);
      shellOut(`git annex drop ${file} --from web --force`);
    }
  } else {
    console.log(`${file}: adding annex web remote from manifest`);
    shellOut(`git annex addurl ${annexURL} --file ${file}`);
    syncAnnexedFile(file);
  }
});
