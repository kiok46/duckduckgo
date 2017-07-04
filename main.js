import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
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

import { connect } from 'react-redux';
// import * as actions from './actions';
import getDefaultTab from './actions/ModifySettingsActions';


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
                        <Icon
                            name={'favorite'}
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
                          <Icon
                            name={'watch-later'}
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
                 showLabel: false,
                 showIcon: true,
                 indicatorStyle: {
                     backgroundColor: 'transparent'
                 },
                 iconStyle: {
                     width: 24,
                     height: 24
                 },
                 style: {
                  backgroundColor: 'white',
                 },
                 tabBarIcon: ({ tintColor }) => {Colors.darkTintColor}
              },
              lazy: true,
              tabBarPosition: 'bottom',
              initialRouteName: 'stories'
          }),
      },
    defaultTabSetting: {
        screen: SettingsScreen.DefaultTabSetting,
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


class AppContainer extends React.Component {


  constructor(props){
      super(props)
      this.state = {
        appIsReady: false,
      };
  }

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

      if (this.state.appIsReady){
          return (
            <View
              style={{ flex:1 }}>
              <StatusBar barStyle="light-content" />
              <Provider store={store}>
                 <MainAppNavigator
                    screenProps={"sdf"}
                 />
              </Provider>
            </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  statusHeight: {
      marginTop: 0
  }
});

const mapStateToProps = (state) => {
    return {
        default_tab: state.LoadSettings.default_tab
    }
}


const MainAppNavigator = connect(mapStateToProps, getDefaultTab)(MainNavigator);

Expo.registerRootComponent(AppContainer);
