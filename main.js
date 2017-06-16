import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements'
import { Provider } from 'react-redux';

import Colors from './constants/Colors';

import SearchScreen from './screens/SearchScreen';
import StoriesScreen from './screens/StoriesScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import DefaultStorySetting from './screens/Settings/DefaultStorySetting';
import ReadabilitySetting from './screens/Settings/ReadabilitySetting';
import RegionSetting from './screens/Settings/RegionSetting';
import SourcesSetting from './screens/Settings/SourcesSetting';

// import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import store from './store';


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

      const MainNavigator = StackNavigator({
          Root: {
                 screen: TabNavigator({
                    search: { screen: SearchScreen },
                    stories: { screen: StoriesScreen },
                    favourites: { screen: FavouritesScreen },
                    history: { screen: HistoryScreen },
                    settings: { screen: SettingsScreen },
                },
                {
                    tabBarOptions: {
                       activeTintColor: Colors.tintColor,
                    },
                    lazy: true,
                    tabBarPosition: 'bottom'
                }),
            },
          defaultStorySetting: {
              screen: DefaultStorySetting,
          },
          readabilitySetting: {
              screen: ReadabilitySetting,
          },
          regionSetting: {
              screen: RegionSetting
          },
          sourcesSetting: {
              screen: SourcesSetting
          }

      })

      if (this.state.appIsReady){
          return (
              <View
                 style={{ flex:1 }}>
                 <StatusBar barStyle="light-content" />
                 <Provider store={store}>
                   <MainNavigator />
                 </Provider>
            </View>
          );
      }
      return (
          <View
             style={{ flex:1 }}>
             <StatusBar barStyle="light-content" />
             <Provider store={store}>
               <MainNavigator />
             </Provider>
        </View>
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
