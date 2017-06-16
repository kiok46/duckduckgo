import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';
import Search from 'react-native-search-box';
import Colors from '../constants/Colors';


class StoriesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'Stories',
        tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome
                name={'newspaper-o'}
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
            <Card
              title='Stories WORLD'>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                icon={{name: 'code'}}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
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

export default StoriesScreen;
