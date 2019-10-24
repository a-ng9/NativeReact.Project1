import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, padding:20}}>
        <FlatList
            data={this.state.dataSource}

            renderItem={({item}) => <Text style={styles.textTile} >{item.id}:  {item.title}</Text>}
        
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
textTile:{
    paddingBottom:15,
    color:'#F44336'
},
line: {
    height: 0.5,
    width: "100%",
    backgroundColor:"rgba(255,255,255,0.5)"
  },
});