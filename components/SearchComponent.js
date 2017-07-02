import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, LayoutAnimation, View, Dimensions, StyleSheet, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Button, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';


class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state= {
			touchable: false
		}
	}

	componentWillUpdate() {
		LayoutAnimation.linear();
	}

	onSearchActive = () => {
		this.props.Searching(isSearching = true)
		this.props.navigation.navigate('search');
		this.setState({ touchable: true })
	}

	componentDidUpdate() {
		if (this.props.is_searching) {
			this.refs.search_textinput_component.focus()
		}
	}

	pressCancelButton = () => {
		this.props.Searching(isSearching = false)
		Keyboard.dismiss()
		this.props.navigation.goBack(null);
		this.props.changeSearchText(search="")
	}

	showCancelButton = () => {
		if (this.props.is_searching) {
			return (
				<Button
				  title="Cancel"
				  fontSize={14}
				  backgroundColor={Colors.tintColor}
				  onPress={this.pressCancelButton.bind(this)}
				/>
			);
		}

	}

	onPriorityIconPress = () => {
		this.props.changeSearchText(search="!")
	}

    renderSearchIcon = () => {
		if (this.props.is_searching) {
			return (
				<View style={{ backgroundColor: 'white'}}>
					<Icon
						name={'priority-high'}
						size={14}
						color={Colors.darkTintColor}
						onPress={this.onPriorityIconPress}
					/>
				</View>
			);
		}
		return (
			<View style={{ backgroundColor: Colors.darkTintColor}}>
				<Icon
					name={'search'}
					size={14}
					color='white'
				/>
			</View>
		);
	}

	onSubmitEditingSearch = () => {
		this.props.storeSearchQuery(searchQuery=this.props.search_text)
		this.props.changeSearchText(search="")
		this.props.navigation.navigate('stories');
		this.pressCancelButton()
	}

	onSearchTextChange = (text) => {
		this.props.changeSearchText(text)
	}

	render (){
		return (
			<View style={styles.SearchContainer}>
			  <TouchableOpacity
			    style={{ elevation: 4 }}
				disabled={this.state.touchable}
			  	onPress={this.onSearchActive.bind(this)}
			  >
			    <View
				  ref="touchable_search"
				  style={styles.touchableSearch}>

				  <View style={[styles.insideTouchableView, this.props.is_searching && styles.altTouchableView]}>
				    {this.renderSearchIcon()}
					<TextInput
					    ref="search_textinput_component"
						autoCorrect={false}
						placeholderTextColor='white'
						value={this.props.search_text}
						onChangeText={(text) => this.onSearchTextChange(text)}
						onSubmitEditing={this.onSubmitEditingSearch}
						keyboardType={'web-search'}
						onFocus={this.onSearchActive.bind(this)}
						placeholder="Search DuckDuckGo"
						style={[styles.customSearchTextInputStyle,]}
					/>
				  </View>
				</View>
			  </TouchableOpacity>
			  {this.showCancelButton()}

			</View>
		);
	}
};

const styles = StyleSheet.create({
	SearchContainer: {
		padding: 5,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.tintColor
	},
	touchableSearch: {
		backgroundColor: Colors.darkTintColor,
		borderRadius: 4,
		padding: 7,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	insideTouchableView: {
		width: Dimensions.get('window').width - 25,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	altTouchableView:{
		width: Dimensions.get('window').width*(.65) -25,
	},
	customSearchTextInputStyle:{
		height: 24,
		alignSelf: 'stretch',
		width: 150,
		fontSize: 14,
		marginLeft: 7,
		color: 'white',
	},
});


const mapStateToProps = (state) => {
	return {
		is_searching: state.SearchReducer.is_searching,
		search_text: state.SearchReducer.search_text
	}
}


export default connect(mapStateToProps, actions)(SearchComponent);
