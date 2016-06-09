import React, { Component } from 'react';

var Separator = require('./Helpers/Separator');
var HistoryElem = require('./HistoryElem');
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
      experiences: []
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
        experiences: res
      })
    })
  }

  render() {
    return (
      <Image style={styles.backgroundImage}
      source = {require('../../imgs/uni.jpg')}>
      <Text style={styles.header}>History</Text>
      {this.state.experiences.map((res, index) => {
        return <HistoryElem key={index} data={res}/>
      })}
      </Image>
    );
  }
}

module.exports = History;