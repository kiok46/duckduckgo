import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';
import Search from 'react-native-search-box';
import Colors from '../../constants/Colors';
import { Icon } from 'react-native-elements'
import StoriesList from './StoriesList';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuContext
} from 'react-native-popup-menu';

import SearchComponent from '../../components/SearchComponent';


class StoriesScreen extends Component {

  static navigationOptions = ({ navigation }) => {

      return {
        tabBarLabel: 'Stories',
        tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome
                name={'newspaper-o'}
                size={24}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              />
        ),
        header: (
            <View style={{ backgroundColor: Colors.tintColor }}>
              <View style={{ marginTop: 24, height: 40 }} >
                <SearchComponent
                    navigation={navigation}
                />
              </View>
            </View>
        )
    };
  };



  render() {
    return (
        <StoriesList />
    );
  }
}

const styles = StyleSheet.create({
  cardInfoStyle: {
      flexDirection: 'row',
      marginRight: 5,
      padding: 5
  },
  cardStyle: {
      marginLeft: 17,
      marginRight: 17,
      marginTop: 20,
      marginBottom: 20,
  },
  storyImageStyle: {
      marginLeft: -15,
      marginRight: -17,
      marginTop: -20,
      marginBottom: 20,
      height: 150,
      right: 1,
      top: 1
  },
  sourceIconStyle: {
      width: 40,
      height: 40
  },
  infoTextStyle: {
      marginLeft: 10,
      marginRight: 25,
      paddingRight: 15,
      alignContent: 'center'
  }

});

export default StoriesScreen;
