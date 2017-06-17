import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Search from 'react-native-search-box';
import Colors from '../constants/Colors';


class FavouritesScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ tintColor, focused }) => (
              <FontAwesome
                  name={'heart'}
                  size={24}
                  color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />
          ),
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                <View style={{ marginTop: 24 }} >
                  <Search
                    backgroundColor={Colors.tintColor}
                    tintColorSearch="purple"
                    color= 'black'
                    tintColorSearch={Colors.darkTintColor}
                    ref="search_box"
                    placeholder="Search DuckDuckGo"
                  />
                </View>
              </View>
          )
    });
  render() {
    return (
        <View>
          <Text>Favourites Settings</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  inputStyle: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
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
  }
});

export default FavouritesScreen;
