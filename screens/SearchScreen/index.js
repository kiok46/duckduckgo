import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';
import Search from 'react-native-search-box';
import Colors from '../../constants/Colors';
import SearchList from './SearchList';


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
            <SearchList/>
        </View>

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
