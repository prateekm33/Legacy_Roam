import React, { Component } from 'react';

var Separator = require('./Helpers/Separator');
var styles = require('./Helpers/styles');

import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image style={styles.backgroundImage}
      source = {require('../../imgs/uni.jpg')}>
      <Text style={styles.confirmation}>History</Text>
      </Image>
    );
  }
}

module.exports = History;