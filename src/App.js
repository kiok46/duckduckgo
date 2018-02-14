import React, { Component } from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './navigation';
import store from './store';
import { connect } from 'react-redux';
import getDefaultTab from './actions/ModifySettingsActions';
import { MenuProvider } from 'react-native-popup-menu';


export default class App extends Component<{}> {
  render() {
    return (
      <MenuProvider backHandler={true}>
        <View
            style={{ flex:1 }}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(222, 88, 51, 1)"/>
            <Provider store={store}>
               <MainAppNavigator/>
            </Provider>
         </View>
      </MenuProvider>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        default_tab: state.LoadSettings.default_tab
    }
}


const MainAppNavigator = connect(mapStateToProps, getDefaultTab)(MainNavigator);
