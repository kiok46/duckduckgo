import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, LayoutAnimation, View, Dimensions, StyleSheet, Keyboard, Platform } from 'react-native';
import Colors from '../constants/Colors';
import { Button, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';


class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.touchableSearch = null;
		this.searchTextinputComponent = null;
		this.state= {
			isTouchableDisabled: false
		}
	}

	componentWillUpdate() {
		LayoutAnimation.linear();
	}

	onSearchActive = () => {
		this.props.Searching(isSearching = true)
		this.props.navigation.navigate('search');
		this.setState({ isTouchableDisabled: true })
	}

	componentDidUpdate() {
		if (this.props.is_searching) {
			this.searchTextinputComponent.focus()
		}
	}

	pressCancelButton = () => {
		this.props.Searching(isSearching = false)
		Keyboard.dismiss()
		this.props.navigation.goBack(null);
		this.props.changeSearchText(search="")
		this.setState({ isTouchableDisabled: false })
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
		this.props.changeSearchText(search=this.props.search_text+"!")
	}

    renderSearchIcon = () => {
		if (this.props.is_searching) {
			return (
				<View style={{ backgroundColor: 'white'}}>
					<Icon
						name={'priority-high'}
						size={16}
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
					size={16}
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
			<View style={styles.statusBarStyle}>
				<View style={styles.SearchContainer}>
				  <TouchableOpacity
				    style={{ elevation: 4 }}
					disabled={this.state.isTouchableDisabled}
				  	onPress={this.onSearchActive.bind(this)}
				  >
				    <View
					  ref={touchableSearch => this.touchableSearch = touchableSearch}
					  style={styles.touchableSearchStyle}>

					  <View style={[styles.insideTouchableView, this.props.is_searching && styles.altTouchableView]}>
					    {this.renderSearchIcon()}
						<TextInput
						    ref={searchTextinputComponent => this.searchTextinputComponent = searchTextinputComponent}
							autoCorrect={false}
							placeholderTextColor='white'
							value={this.props.search_text}
							onChangeText={(text) => this.onSearchTextChange(text)}
							onSubmitEditing={this.onSubmitEditingSearch}
							keyboardType={'web-search'}
							onFocus={this.onSearchActive.bind(this)}
							placeholder="Search DuckDuckGo"
							underlineColorAndroid={Colors.darkTintColor}
							style={[styles.customSearchTextInputStyle]}
						/>
					  </View>
					</View>
				  </TouchableOpacity>
				  {this.showCancelButton()}
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	statusBarStyle: {
		marginTop: Platform.OS === 'ios' ? 24 : 0,
		height: 40,
	},
	SearchContainer: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.tintColor
	},
	touchableSearchStyle: {
		backgroundColor: Colors.darkTintColor,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	insideTouchableView: {
		width: Dimensions.get('window').width-10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	altTouchableView:{
		width: Dimensions.get('window').width*(.65) -15,
	},
	customSearchTextInputStyle:{
		height: 32,
		width: 150,
		fontSize: 14,
		marginLeft: 7,
		padding: 1,
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
