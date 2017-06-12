import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements'
import Colors from './constants/Colors';

import SearchScreen from './screens/SearchScreen';
import FeedScreen from './screens/FeedScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';

// import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';
// import store from './store';


class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/images/expo-wordmark.png')],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  onSearch = () => {

  }

  render() {
      const MainNavigator = TabNavigator({
          search: { screen: SearchScreen },
          feed: { screen: FeedScreen },
          favourites: { screen: FavouritesScreen },
          history: { screen: HistoryScreen },
          settings: { screen: SettingsScreen },
      },
      {
          tabBarOptions: {
             activeTintColor: Colors.tintColor,
          },
          lazy: true
      });
      if (this.state.appIsReady){
          return (
                  <MainNavigator />
          );
      }
      return (
          <AppLoading />
      );

  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  statusHeight: {
      marginTop: 0
  }
});

Expo.registerRootComponent(AppContainer);
