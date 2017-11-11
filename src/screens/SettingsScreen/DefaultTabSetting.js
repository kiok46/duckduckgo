import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import Colors from '../../constants/Colors';
import { Button, Icon } from 'react-native-elements';
import SearchComponent from '../../components/SearchComponent';

import DefaultTab from '../../constants/DefaultTab';

import { connect } from 'react-redux';
import * as actions from '../../actions';

var { height, width } = Dimensions.get('window');

class DefaultTabSetting extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                <View style={{ flexDirection: "row"}} >
                    <Icon
                        name={'cog'}
                        size={24}
                        type='font-awesome'
                        style= {{ paddingTop: 25, paddingLeft: 3 }}
                        iconContainerStyle={{paddingTop: 20}}
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

    constructor(props){
        super(props)
    }


    async componentWillMount() {
      // AsyncStorage.clear()
      await this.props.getSearchHistory();
      await this.props.getDefaultTab();
    }

    onPressSearchHistoryItem = (query) => {
		this.props.navigation.navigate('search');
		this.props.changeSearchText(query)
		this.props.Searching(isSearching = true)
	}

    showDefaultCheckedIcon = (idx) =>{

        if (idx === this.props.default_tab){
            return (
                <Icon
                    name='done'
                    color={Colors.tintColor}
                    containerStyle={{ marginLeft: 20 }}
                />
            );
        }
    }

    selectDefaultTab = (idx) => {
        this.props.changeDefaultTab(tab=idx)
        this.props.navigation.goBack(null)
    }


  render() {
    return (
        <ScrollView style={{ marginTop: 20, height: height}}>
            {DefaultTab.map((tabRouteName, idx) =>
            <TouchableOpacity
                key={idx}
                onPress={() => this.selectDefaultTab(tabRouteName)}
            >
            <Card
                marginBottomProp={0}
                backgroundColorProp={'white'}
            >
                <View style={styles.searchListItemStyle}>

                    <Text
                        style={styles.searchListItemTextStyle}
                        numberOfLines={1}
                    >
                    {tabRouteName}
                    </Text>
                    {this.showDefaultCheckedIcon(tabRouteName)}

                </View>
            </Card>
            </TouchableOpacity>
         )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	searchListItemStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 10,
		marginBottom: 10,
		marginRight: 20,
		marginLeft: 20,

	},
	searchListItemTextStyle: {
        paddingTop: 5,
		fontSize: 16,
		marginLeft: 15,
		marginRight: 15,
		width: Dimensions.get('window').width*(.7) -25,
	}
});


const mapStateToProps = (state) => {
    return {
        default_tab: state.LoadSettings.default_tab,
    }
}


export default connect(mapStateToProps, actions)(DefaultTabSetting);
