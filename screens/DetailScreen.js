import React from 'react';
import { View, Text, Button } from 'react-native';


export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again (will not do anything)"
          onPress={() => this.props.navigation.push('Details')}
        />

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />


        <Button
          title="Go to ListScreen"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}