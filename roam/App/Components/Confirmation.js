import React, { Component } from 'react';
import {Alert, Text, View, Image, TouchableHighlight, ListView} from 'react-native';
import YourRoam from './YourRoam';
var styles = require('./Helpers/styles');
var _ = require('underscore');

class Confirmation extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //handle fetch
    let coordinates = {};
    var context = this;
    
    const fetchRoam = function(coordinates, bounds, clearTimer) {
      fetch('https://roam-legacy.herokuapp.com/roam', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            coordinates: coordinates,
            userEmail: context.props.navigator.navigationContext._currentRoute.email, 
            time: context.props.navigator.navigationContext._currentRoute.selectedTime, 
            groupSize: context.props.navigator.navigationContext._currentRoute.selectedGroup,  
            boundingBox: bounds
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data === 'You have been matched!'){
            //TODO: send push notification to user
            clearInterval(clearTimer);
            context.yourRoam.bind(context)();
          }
        })
        .catch((error) => {
          console.log('Error handling submit:', error);
        });
    } 

    const tenMinutes = 1000 * 60 * 10;
    const d_fetchRoam = _.debounce(fetchRoam, tenMinutes, true);

    navigator.geolocation.getCurrentPosition( position => {
      let time = this.props.navigator.navigationContext._currentRoute.selectedTime;
      switch (time) {
        case '1 hour':
          time = 6;
          break;
        case '2 hours':
          time = 12;
          break;
        case '4 hours':
          time = 24;
          break;
        case 'Anytime':
          time = 48;
          break;
      }

      let bounds = 0.02;
      let fetchCounter = 0;
      d_fetchRoam(position, bounds);

      let clearTimer = setInterval(() => {
        bounds += 0.04;
        d_fetchRoam(position, bounds, clearTimer);

        fetchCounter++;
        fetchCounter === time ? clearInterval(clearTimer) : null;
      }, tenMinutes);
      
    });
  }

  yourRoam() {
    this.props.navigator.push({
      title: 'Your Roam',
      component: YourRoam
    })
  }

  handleCancel() {
    //we will cancel roam from here
    //remove the roam from db
    //take the user back to the 'Time' page
    console.log('email is:', this.props.navigator.navigationContext._currentRoute.email);

    this.props.navigator.pop();

    fetch('https://roam-legacy.herokuapp.com/cancel', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmail: this.props.navigator.navigationContext._currentRoute.email
      })
    })
    .then((res) => {
      console.log('Canceled Roam:', res);
    })
    .catch((error) => {
      console.log('Error handling submit:', error);
    });

  }

  render() {
    return (
      <Image style={styles.backgroundImage}
        source={require('../../imgs/uni.jpg')}>
        <Text style={styles.title}> roam </Text>

          <Text style={styles.confirmation}>Great! We are working on finding your next Roam!</Text>
          <Text style={styles.confirmation}>We will notify you the details through email.</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleCancel.bind(this)}
            underlayColor="white" >
              <Text style={styles.buttonText}>Cancel Roam</Text>
          </TouchableHighlight>

      </Image>
    );
  }
}


module.exports = Confirmation;
