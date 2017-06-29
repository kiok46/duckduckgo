import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import Search from 'react-native-search-box';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements'

import SearchList from '../SearchScreen/SearchList';
import SearchComponent from '../../components/SearchComponent';


const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Text>{banner}</Text>
    <Button
      onPress={() => {
        navigation.goBack(null);
      }}
      title="Go back"
    />
  </ScrollView>
);



class RecentSearchesTab extends Component {

    constructor(props){
        super(props)
    }

    static navigationOptions = ({ router, navigation }) => ({
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                  <View style={{ marginTop: 24, height: 40 }} >
                    <SearchComponent/>
                  </View>
              </View>
          )
    });

    render () {
        return (
            <View>
                <SearchList/>
            </View>
        );
    }
}


export default RecentSearchesTab;
