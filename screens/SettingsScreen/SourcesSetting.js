import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Search from 'react-native-search-box';
import { Button, Icon } from 'react-native-elements';
import SearchComponent from '../../components/SearchComponent';


class SourcesSetting extends Component {
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
                  <View style={{ marginTop: 24, height: 40, flexDirection: "row"}} >
                      <Icon
                          name='sc-telegram'
                          type='evilicon'
                          color='#517fa4'
                          onPress={() => {
                              navigation.goBack(null)
                            }
                          }
                        />
                      <SearchComponent/>
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

export default SourcesSetting;
