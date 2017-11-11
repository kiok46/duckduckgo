import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Colors from '../../constants/Colors';
import SearchList from './SearchList';
import SearchComponent from '../../components/SearchComponent';


class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
          tabBarLabel: 'Search',
          tabBarIcon: ({ tintColor, focused }) => (
              <Icon
                  name={'search'}
                  size={24}
                  color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />
          ),
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                  <SearchComponent
                      navigation={navigation}
                      navOnCancel={'search'}
                  />
              </View>
          )
      }
    };

  render() {
    return (
        <View>
            <SearchList
                navigation={this.props.navigation}
            />
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
