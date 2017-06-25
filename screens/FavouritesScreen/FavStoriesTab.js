import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import Search from 'react-native-search-box';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements'


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



class FavStoriesTab extends Component {

    constructor(props){
        super(props)
    }

    static navigationOptions = ({ router, navigation }) => ({
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

    render () {
        return (
            <MyNavScreen banner="FavouritesStories Tab" navigation={this.props.navigation} />
        );
    }
}


export default FavStoriesTab;
