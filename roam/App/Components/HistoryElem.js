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
        <Text style = {styles.location}>Rating: {this.props.data.roam.rating}</Text>
        <Text style = {styles.location}>{new Date(this.props.data.roam.date).toLocaleDateString()}</Text>
        <Text style = {styles.location}>Roamers:</Text>
        {this.props.data.people.map((res, index) => {
          return <Text key={index}>{res.name}</Text>
        })}
      </View>
    );
  }
}

module.exports = HistoryElem;