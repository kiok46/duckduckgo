import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Card extends Component {
	constructor(props) {
		super(props);
	}
	render (){
		return (

			<View style={[styles.containerStyle, { marginBottom: this.props.marginBottomProp, backgroundColor: this.props.backgroundColorProp } ]}>
				{this.props.children}
			</View>
		);
	}
};

const styles = StyleSheet.create({
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height:2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		// marginTop: 10
		marginTop: -1,
		marginBottom: 10
	},
	textStyle: {
		fontSize: 20
	}
});

export default Card;
