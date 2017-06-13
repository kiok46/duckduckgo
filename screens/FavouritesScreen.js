import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomSearchBar from '../components/customSearchBar';
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
    });


  render() {
    return (
        <View style={styles.searchAreaView} >
            <CustomSearchBar
                onFocus={this.onFocus}
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
