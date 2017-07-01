import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, LayoutAnimation, View, Dimensions, StyleSheet, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';


class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searching: false
		}
	}

	componentWillUpdate() {
		LayoutAnimation.linear();
	}

	onSearchActive = () => {
		this.setState({ searching: true })
		this.props.searchActiveAction()
	}

	componentDidUpdate() {
		if (this.state.searching) {
			this.refs.search_textinput_component.focus()
		}
	}

	pressCancelButton = () => {
		this.setState({ searching: false })
		Keyboard.dismiss()
		console.log("inside pressCancelButton method")
		console.log(this.props)
		this.props.searchCancelAction()
	}

	showCancelButton = () => {
		if (this.state.searching) {
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

				  <View style={[styles.insideTouchableView, this.state.searching && styles.altTouchableView]}>
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

export default SearchComponent;
