import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { SearchBar } from 'react-native-elements';

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

  onSearch = () => {

  }

  render() {
    return (
        <View style={{ marginTop: 16 }}>
            <SearchBar
                lightTheme
                autoFocus
                textAlign='center'
                containerStyle={styles.searchBar}
                inputStyle= {styles.insideSearchBar}
                onChangeText={this.onSearch}
                placeholder='Type Here...'
                placeholderTextColor="#fff"
            />
            <Text>FFFFF</Text>
        </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  searchBar: {
      backgroundColor: Colors.tintColor,
  },
  insideSearchBar: {
      backgroundColor: Colors.darkTintColor,
  }
});

export default FavouritesScreen;
