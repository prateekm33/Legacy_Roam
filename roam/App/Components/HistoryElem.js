// this component should

import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';

var Separator = require('./Helpers/Separator');
var styles = require('./Helpers/styles');

import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

class HistoryElem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style = {styles.location}>{this.props.data.roam.location}</Text>
        {this.props.data.people.map((res, index) => {
          return <Text key={index}>{res.name}</Text>
        })}
      </View>
    );
  }
}

module.exports = HistoryElem;