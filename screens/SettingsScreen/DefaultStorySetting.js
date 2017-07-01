import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Search from 'react-native-search-box';
import { Button, Icon } from 'react-native-elements';
import SearchComponent from '../../components/SearchComponent';


class DefaultStorySetting extends Component {
    static navigationOptions = ({ navigation }) => {
        searchActiveAction = () => {
            navigation.navigate('search')
        };

        searchCancelAction = () => {
            navigation.goBack(null);
        };

        return {
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                <View style={{ marginTop: 24, height: 40, flexDirection: "row"}} >
                    <FontAwesome
                        name={'cog'}
                        size={24}
                        style= {{ paddingTop: 5, paddingLeft: 3 }}
                        color={'white'}
                        onPress={() => {
                            navigation.goBack(null)
                          }
                        }
                      />
                      <SearchComponent
                          navigation={navigation}
                          searchActiveAction={() => searchActiveAction}
                          searchCancelAction={() => searchCancelAction}
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

export default DefaultStorySetting;
