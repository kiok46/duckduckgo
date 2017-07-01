import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, LayoutAnimation, View, Dimensions, StyleSheet, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';


class SearchComponent extends Component {
	constructor(props) {
		super(props);
	}

	componentWillUpdate() {
		LayoutAnimation.linear();
	}

	onSearchActive = () => {
		this.props.Searching(isSearching = true)
		this.props.navigation.navigate('search');
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

	render (){
		return (
			<View style={styles.SearchContainer}>
			  <TouchableOpacity
			    style={{ elevation: 4 }}
			  	onPress={this.onSearchActive.bind(this)}
			  >
			    <View
				  ref="touchable_search"
				  style={styles.touchableSearch}>

				  <View style={[styles.insideTouchableView, this.props.is_searching && styles.altTouchableView]}>
				    <View style={{ backgroundColor: Colors.darkTintColor}}>
						<FontAwesome
							name={'search'}
							size={14}
							color='white'
						/>
					</View>
					<TextInput
					    ref="search_textinput_component"
						autoCorrect={false}
						placeholderTextColor='white'
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
		width: Dimensions.get('window').width*(.7) -25,
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
	}
}


export default connect(mapStateToProps, actions)(SearchComponent);
