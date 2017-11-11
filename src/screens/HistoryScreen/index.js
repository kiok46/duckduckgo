import React, { Component } from 'react';
import { ScrollView, Platform, TouchableOpacity, TouchableHighlight,
    StyleSheet, TextInput, Text, View } from 'react-native';
import { Button } from 'react-native-elements'

import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

import Colors from '../../constants/Colors';

import HistoryTabRouter from './HistoryTabRouter';

import { connect } from 'react-redux';
import * as actions from '../../actions';


class HistoryTabBar extends Component {
    constructor(props) {
        super(props)
    }

    handleTabColors = (idx) => {
        if (idx === 0){
            if (this.props.searchTabOpen){
                return 'white'
            }
            return Colors.tintColor

        } else {
            if (this.props.storiesTabOpen){
                return 'white'
            }
            return Colors.tintColor
        }
    }


    handleTabNavigation = (route, idx) => {
        if (this.props.storiesTabOpen && idx === 0 || this.props.searchTabOpen && idx === 1){
            this.props.toggleHistorySearchTab(!this.props.searchTabOpen)
            this.props.toggleHistoryStoriesTab(!this.props.storiesTabOpen)
            this.props.navigation.navigate(route.routeName)
        }
    }

    tabName = (idx) => {
        if (idx === 0){
            return 'Recent Stories'
        }
        return 'Recent Searches'
    }

    render () {
        return (
            <View style={{ backgroundColor: Colors.tintColor }}>
                <View style={styles.tabContainer}>

                  {this.props.navigation.state.routes.map((route, idx) => (

                    <TouchableHighlight
                      onPress={() => this.handleTabNavigation(route, idx)}
                      style={[styles.tab, { backgroundColor: this.handleTabColors(idx)} ]}
                      key={route.routeName}
                    >
                      <Text style={{ color: this.handleTabColors(idx === 1 ? 0: 1) }}>{this.tabName(idx)}</Text>
                    </TouchableHighlight>

                  ))}

                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchTabOpen: state.HistoryReducer.searchTabOpen,
        storiesTabOpen: state.HistoryReducer.storiesTabOpen,
    }
}

const HistoryTabBarRedux = connect(mapStateToProps, actions)(HistoryTabBar);


const HistoryTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View >
      <HistoryTabBarRedux navigation={navigation} />
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
    // borderTopRightRadius: 1,
    // borderBottomRightRadius: 1,
    backgroundColor: Colors.tintColor,
    borderColor: 'white',
    borderRadius: 2
  },
  tabAlt: {
    backgroundColor: 'white',
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
