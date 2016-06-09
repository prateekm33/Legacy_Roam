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
    var stars = [];
    for(var i = 0; i < this.props.data.roam.rating; i++){
      stars.push("⭐");
    }
    return (
      <View style = {styles.historyBox}>
        <Text style = {styles.location}>{this.props.data.roam.location}</Text>
        <Text style = {styles.history}>{new Date(this.props.data.roam.date).toLocaleDateString()}</Text>
        <Text style = {styles.location}>{stars}</Text>
        <Text style = {styles.location}>Roamers:</Text>
        {this.props.data.people.map((res, index) => {
          return <Text style = {styles.history} key={index}>{res.name}</Text>
        })}
      </View>
    );
  }
}

module.exports = HistoryElem;