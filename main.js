import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements'
import Search from 'react-native-search-box';
import { Provider } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import Colors from './constants/Colors';

import SearchScreen from './screens/SearchScreen';
import StoriesScreen from './screens/StoriesScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';

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


  render() {

      const MainNavigator = StackNavigator({
          Root: {
                 screen: TabNavigator({
                    search: { screen: SearchScreen },
                    stories: { screen: StoriesScreen },
                    favourites: {
                        screen: FavouritesScreen,
                        navigationOptions: {
                          tabBarLabel: 'Favourites',
                          tabBarIcon: ({ tintColor, focused }) => (
                              <FontAwesome
                                  name={'heart'}
                                  size={24}
                                  color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                                />
                            ),
                          }
                     },
                    history: {
                        screen: HistoryScreen,
                        navigationOptions: {
                            tabBarLabel: 'History',
                            tabBarIcon: ({ tintColor, focused }) => (
                              <FontAwesome
                                  name={'clock-o'}
                                  size={24}
                                  color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                                />
                            ),
                        }
                    },
                    settings: { screen: SettingsScreen.SettingsScreen },
                },
                {
                    tabBarOptions: {
                       activeTintColor: Colors.tintColor,
                       showLabel: false
                    },
                    lazy: true,
                    tabBarPosition: 'bottom',
                    initialRouteName: 'stories'
                }),
            },
          defaultStorySetting: {
              screen: SettingsScreen.DefaultStorySetting,
          },
          readabilitySetting: {
              screen: SettingsScreen.ReadabilitySetting,
          },
          regionSetting: {
              screen: SettingsScreen.RegionSetting,
          },
          sourcesSetting: {
              screen: SettingsScreen.SourcesSetting,
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  statusHeight: {
      marginTop: 0
  }
});

Expo.registerRootComponent(AppContainer);
