import React from 'react';
import { SectionList, StyleSheet, Text, View, Button } from 'react-native';

export default class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ListView /> */}
        <SectionList style={styles.sections}
          sections={[
            {title: 'A', data: ['a', 'A', 'o']},
            {title: 'B', data: ['b', 'B', 'bottle', 'etc...']},
          ]}
          renderItem={({item}) => <Text style={styles.ixtem}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Button
          title="Next page (list from a GET request)"
          onPress={() => this.props.navigation.navigate('Network')}
        />
      </View>
    );
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
