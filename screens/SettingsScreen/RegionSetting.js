import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Search from 'react-native-search-box';
import { Button, Icon } from 'react-native-elements';
import SearchComponent from '../../components/SearchComponent';


class RegionSetting extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
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
                      <SearchComponent
                          navigation={navigation}
                      />
                </View>
              </View>
          )
      }
    };


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

export default RegionSetting;
