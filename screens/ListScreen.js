import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ['a', 'A', '@']},
            {title: 'B', data: ['b', 'B', 'bottle', 'etc...']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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
  },
})
