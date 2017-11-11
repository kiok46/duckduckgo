import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { SearchBar } from 'react-native-elements';


class CustomSearchBar extends Component {

    onSearch = () => {

    }

  render() {
    return (
		<SearchBar
          lightTheme
		  textAlign='center'
		  containerStyle={styles.searchBar}
		  inputStyle= {styles.insideSearchBar}
		  onChangeText={this.onSearch}
		  placeholder='Search DuckDuckGo'
		  placeholderTextColor="#fff"
          onFocus={this.props.onFocus}
		/>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
      backgroundColor: Colors.tintColor,
      borderColor: Colors.tintColor
  },
  insideSearchBar: {
      backgroundColor: Colors.darkTintColor,
      fontSize: 12
  }
});

export default CustomSearchBar;
