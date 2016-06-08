import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, ListView } from 'react-native';
var styles = require('./Helpers.styles');

class SearchRoam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Food', 'Drinks', 'Sports', 'Hiking'], 
      chosenOption: null
    };
  }
  handleSearch() {

    //TODO: include user chosen 'time' in body obj

    let initialPosition = {};
    navigator.geolocation.getCurrentPosition(position => {
      initialPosition = position;
    });

    //TODO: run fetch every 5 min interval 
    //TODO: clearInterval after %5 count
    fetch('http://localhost:3000/roam', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        userEmail: this.props.navigator.navigationContext._currentRoute.email, 
        coordinates: initialPosition
      })
    })
    .then(res => {
      if (res === 'No match currently') {

      } else if (res === 'You have been matched!'){

      }
    })
    .catch();
  }

  handleOption(idx) {
    //TODO: this whole function -- extra feature
    this.setState({ chosenOption: this.state.options[i] }); //refers to clicked option
    console.log(this.state, 'STATE');
  }

  render() {
    return (
      <Text style={styles.title}> ROAM </Text>
      <ListView datasource={this.state.options} 
        renderRow={(option, idx) => {
          return (
            <TouchableHighlight style={styles.button} onPress={this.handleOption.bind(this, idx)} underlayColor='white'>
              <Text key={idx}>{option}</Text>
            </TouchableHighlight>
          );} 
        }/>

      
      <TouchableHighlight
        style={styles.button}
        onPress={this.handleSearch.bind(this)}
        underlayColor="white"
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = SearchRoam;

