import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import { Button, Icon } from 'react-native-elements';
import SearchComponent from '../../components/SearchComponent';
import NoItemComponent from '../../components/NoItemComponent';


class RaedabilitySetting extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          header: (
              <View style={{justifyContent: 'center', backgroundColor: Colors.tintColor }}>
                <View style={{flexDirection: "row"}} >
                    <Icon
                        name={'cog'}
                        type='font-awesome'
                        size={24}
                        color={'white'}
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
        <NoItemComponent
          iconName='error'
          infoHeading="Not Implemented"
          infoParagraph="Since this screen is similar to DefaultTab screen. "
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});

export default RaedabilitySetting;
