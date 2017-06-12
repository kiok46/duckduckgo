import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';


class FeedScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome
                name={'newspaper-o'}
                size={24}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              />
        ),
  });

  render() {
    return (
      <Text>FFFFF</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});

export default FeedScreen;
