import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';
import Geolocation from './Geolocation';
// var Geolocation = require('./Geolocation');
var Confirmation = require('./Confirmation');
var iBeacon = require('./iBeacon');
var Separator = require('./Helpers/Separator');
var styles = require('./Helpers/styles');

import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  MapView
} from 'react-native';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      selectedTime: '1 hour'
=======
      selectedTime: '1 hour', 
      selectedGroup: 'Solo'
>>>>>>> 1e36fee4bd45e7d45d99a75c0d485ccc63890904
    };
  }
  handleSelectedTime(choice) {
    this.setState({
      selectedTime: choice
<<<<<<< HEAD
=======
    });
  }

  handleSelectedGroup(choice) {
    this.setState({
      selectedGroup: choice
>>>>>>> 1e36fee4bd45e7d45d99a75c0d485ccc63890904
    });
  }

  handleSubmit() {
    console.log('Sending ROAM request!');
    this.props.navigator.push({
      title: 'Confirmation',
      selectedTime: this.state.selectedTime,
      email: this.props.navigator.navigationContext._currentRoute.email,
      selectedTime: this.state.selectedTime,
      selectedGroup: this.state.selectedGroup,
      component: Confirmation
    });
  }

<<<<<<< HEAD
  handleHistory() {
    console.log('page not built yet!');
=======
  iBeacon() {
    this.props.navigator.push({
      title: 'iBeacon', 
      email: this.props.navigator.navigationContext._currentRoute.email, 
      component: iBeacon
    })
>>>>>>> 1e36fee4bd45e7d45d99a75c0d485ccc63890904
  }

  render () {
    const options = [
      '1 hour',
      '2 hours',
      '4 hours',
      'Anytime'
    ];

    const groupOptions = [
      'Solo', 
      'Group'
    ];

    return (
      <Image style={styles.backgroundImage}
      source={require('../../imgs/uni.jpg')} >
        <Geolocation />
        <Text style={styles.header}> pick time : </Text>
        <SegmentedControls
          tint={'#ff0066'}
          selectedTint={'white'}
          backTint={'white'}
          options={options}
          allowFontScaling={false}
          fontWeight={'bold'}
<<<<<<< HEAD
          onSelection={this.handleSelected.bind(this)}
          selectedOption={this.state.selectedTime} />
=======
          onSelection={this.handleSelectedTime.bind(this)}
          selectedOption={this.state.selectedTime} />
        <SegmentedControls
        tint={'#ff0066'}
        selectedTint={'white'}
        backTint={'white'}
        options={groupOptions}
        allowFontScaling={false}
        fontWeight={'bold'}
        onSelection={this.handleSelectedGroup.bind(this)}
        selectedOption={this.state.selectedGroup} />
>>>>>>> 1e36fee4bd45e7d45d99a75c0d485ccc63890904
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)} >
            <Text style={styles.buttonText}> Roam! </Text>
        </TouchableHighlight>
<<<<<<< HEAD
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleHistory.bind(this)} >
            <Text style={styles.buttonText}> View History </Text>
=======

        <TouchableHighlight
          style={styles.button}
          onPress={this.iBeacon.bind(this)}>
          <Text>iBeacon</Text>
>>>>>>> 1e36fee4bd45e7d45d99a75c0d485ccc63890904
        </TouchableHighlight>
      </Image>
    );
  }
}

module.exports = Time;


