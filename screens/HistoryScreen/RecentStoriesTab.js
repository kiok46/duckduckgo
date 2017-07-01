import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import Search from 'react-native-search-box';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements'

import StoriesList from '../StoriesScreen/StoriesList';
import SearchComponent from '../../components/SearchComponent';


const MyNavScreen = ({ navigation, banner }) => (
  /*
  Use this component like this.

  <MyNavScreen banner="RecentStories Tab" navigation={this.props.navigation} />
  */
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



class RecentStoriesTab extends Component {

    constructor(props){
        super(props)
    }

    static navigationOptions = ({ router, navigation }) => {

        return {
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                  <View style={{ marginTop: 24, height: 40 }} >
                  <SearchComponent
                      navigation={navigation}
                  />
                  </View>
              </View>
          )
       }
    };

    render () {
        return (
            <View>
                <StoriesList/>
            </View>
        );
    }
}


export default RecentStoriesTab;
