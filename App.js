import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import ListScreen from './screens/ListScreen';
import NetworkGET from './screens/NetworkScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    List: ListScreen,
    Network: NetworkGET,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}