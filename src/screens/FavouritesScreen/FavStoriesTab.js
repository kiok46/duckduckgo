import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements'

import NoItemComponent from '../../components/NoItemComponent';
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



class FavStoriesTab extends Component {

    constructor(props){
        super(props)
    }

    static navigationOptions = ({ router, navigation }) => {

        return {
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                  <SearchComponent
                      navigation={navigation}
                      navOnCancel='favourites'
                  />
              </View>
          )
      }
    };

    render () {
        return (
            <NoItemComponent
              iconName='favorite'
              infoHeading="No Favourites"
              infoParagraph="Add stories to your favouries, and they will be shown here."
            />
        );
    }
}


export default FavStoriesTab;
