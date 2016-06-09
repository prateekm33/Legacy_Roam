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
    this.state = {
      experiences: ''
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/history', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log(res);
      this.setState({
        experiences: res.roam.location
      })
    })
  }

  render() {
    return (
      <Image style={styles.backgroundImage}
      source = {require('../../imgs/uni.jpg')}>
      <Text style={styles.header}>History</Text>
      <Text style={styles.confirmation}>{this.state.experiences}</Text>
      </Image>
    );
  }
}

module.exports = History;