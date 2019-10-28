import React from 'react';
import {  StyleSheet, Text, View, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


export default class FormScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<Text>HelloWorld</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sections:{
height: 75,
  },
  container: {
   flex: 1,
   paddingTop: 5,
   paddingBottom: 30,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    color: '#F44336'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#F44336'
  },
})
