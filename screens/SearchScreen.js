import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
          tabBarLabel: 'Search',
          tabBarIcon: ({ tintColor, focused }) => (
              <FontAwesome
                  name={'search'}
                  size={24}
                  color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />
          ),
    });

  render() {
    return (
      <Text>sfbisbvsudbvsdhvosdnvoisdnvosdnvosdvosvosu</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});

export default SearchScreen;
