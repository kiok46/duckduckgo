import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor, focused }) => (
              <FontAwesome
                  name={'cog'}
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
  },
});

export default SettingsScreen;
