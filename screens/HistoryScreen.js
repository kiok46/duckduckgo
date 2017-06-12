import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

class HistoryScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
          tabBarLabel: 'History',
          tabBarIcon: ({ tintColor, focused }) => (
              <FontAwesome
                  name={'clock-o'}
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

export default HistoryScreen;
