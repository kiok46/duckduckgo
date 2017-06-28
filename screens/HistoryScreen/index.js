import React, { Component } from 'react';
import { ScrollView, Platform, TouchableOpacity, TouchableHighlight,
    StyleSheet, TextInput, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements'

import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

import Search from 'react-native-search-box';
import Colors from '../../constants/Colors';

import HistoryTabRouter from './HistoryTabRouter';


class HistoryTabBar extends Component {
    constructor(props) {
        super(props)
        const { routes } = this.props.navigation.state
        const navigation = this.props.navigation
    }
    render () {
        return (
            <View style={{ backgroundColor: Colors.tintColor }}>
                <View style={styles.tabContainer}>

                  {this.props.navigation.state.routes.map(route => (

                    <TouchableHighlight
                      onPress={() => this.props.navigation.navigate(route.routeName)}
                      style={[styles.tab, { backgroundColor: 'white'} ]}
                      key={route.routeName}
                    >
                      <Text style={{ color: Colors.tintColor }}>{route.routeName}</Text>
                    </TouchableHighlight>

                  ))}
                  
                </View>
            </View>
        );
    }
}


const HistoryTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View >
      <HistoryTabBar navigation={navigation} />
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
        })}
      />
    </View>
  );
};


const HistoryScreen = createNavigationContainer(
  createNavigator(HistoryTabRouter)(HistoryTabView)
);


const styles = StyleSheet.create({
  inputStyle: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 2,
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      backgroundColor: Colors.tintColor
  },
  searchAreaView: {
      paddingTop: 24,
      backgroundColor: Colors.tintColor,
      borderColor: Colors.tintColor
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: Colors.tintColor,
    borderColor: '#ddd',
    borderRadius: 4

  },
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: Colors.tintColor,
    margin: 5,
  }
});

export default HistoryScreen;
