import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Search from 'react-native-search-box';
import { Button, Icon } from 'react-native-elements';


class DefaultStorySetting extends Component {
    static navigationOptions = ({ navigation }) => ({
          tabBarLabel: 'History',
          tabBarIcon: ({ tintColor, focused }) => (
              <FontAwesome
                  name={'clock-o'}
                  size={24}
                  color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />
          ),
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                <View style={{ marginTop: 24 }} >
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
					onPress={() => {
                        navigation.goBack(null)
                      }
                    }
				  />
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
      <Text>FFFFF</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});

export default DefaultStorySetting;
