import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements'

import { connect } from 'react-redux';
import * as actions from '../../actions';

import SearchList from '../SearchScreen/SearchList';
import SearchComponent from '../../components/SearchComponent';
import NoItemComponent from '../../components/NoItemComponent';


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



class RecentSearchesTab extends Component {

    constructor(props){
        super(props)
    }

    static navigationOptions = ({ router, navigation }) => {

        return {
          header: (
              <View style={{ backgroundColor: Colors.tintColor }}>
                  <SearchComponent
                      navigation={navigation}
                  />
              </View>
          )
       }
    };

    renderSearchComponents = () => {
        console.log(this.props)
        if (this.props.search_history_items.length < 1){
            return (
                <NoItemComponent
                  iconName='watch-later'
                  infoHeading="No Recents"
                  infoParagraph="Browse stories and search the web, and your recents will be shown here."
                />
            );
        }

        return (
            <SearchList
                navigation={this.props.navigation}
            />
        )

    }

    render () {
        return (
            <View>
                {this.renderSearchComponents()}
            </View>

        );
    }
}

const mapStateToProps = (state) => {
	return {
		search_history_items: state.SearchReducer.search_history_items,

	};
}


export default connect(mapStateToProps, actions)(RecentSearchesTab);
