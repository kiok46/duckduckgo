import React, { Component } from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigation';
import store from './src/store';
import { connect } from 'react-redux';
import getDefaultTab from './src/actions/ModifySettingsActions';


export default class App extends Component<{}> {
  render() {
    return (
        <View
            style={{ flex:1 }}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(222, 88, 51, 1)"/>
            <Provider store={store}>
               <MainAppNavigator/>
            </Provider>
         </View>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        default_tab: state.LoadSettings.default_tab
    }
}


const MainAppNavigator = connect(mapStateToProps, getDefaultTab)(MainNavigator);
