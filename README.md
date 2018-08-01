# Dustup [![Build Status](https://travis-ci.org/dustup/dustup.svg?branch=master)](https://travis-ci.org/dustup/dustup)

Reference fighting game moves from your phone!

## Development

Dustup is powered by [React Native](https://facebook.github.io/react-native/).
To get a development environment running you'll need `npm`.

This project requires `node ^10.6.0` and  `npm ^6.1.0`.

```
git clone https://github.com/dustup/dustup
cd dustup
npm install
```

Optionally you'll need to open your firewall if you desire to use [Expo](https://expo.io/) to live demo Dustup on a mobile device during development.

```
sudo firewall-cmd --add-port 19000-19001/tcp
sudo firewall-cmd --add-port 19000-19001/tcp --permanent
```

Then crank it up:

```
npm run exp
```

## Tests

Run Dustup tests via `npm test`.

This runs `jest` as well as validating our move data against a schema (using `ajv` and `ajv-cli`).
