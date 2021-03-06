import React from 'react';
import {
  Body,
  Card,
  CardItem,
  Separator,
  Text,
} from 'native-base';

export default class Mechanics extends React.Component {
  render() {
    const {mechanics} = this.props;

    return (
      <React.Fragment>
        <Separator bordered>
          <Text>Mechanics</Text>
        </Separator>
        <Card>
          <CardItem>
            <Body>
              <Text style={{fontFamily: 'SourceCodePro'}}>{mechanics}</Text>
            </Body>
          </CardItem>
        </Card>
      </React.Fragment>
    );
  }
}
