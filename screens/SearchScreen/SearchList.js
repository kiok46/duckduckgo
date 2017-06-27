import React, { Component } from 'react';
import { Text, View, Dimensions, Image, ScrollView, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import { tabIconDefault } from '../../constants/Colors';

var { height, width } = Dimensions.get('window');

class SearchList extends Component {

	constructor(props) {
		super(props);
	}
	render () {
		return (
			<ScrollView style={{ marginTop: 20, height: height}}>
			<Card
			    marginBottomProp={0}
				backgroundColorProp={'white'}
			>
				<View style={styles.searchListItemStyle}>
					<Icon
						name='watch-later'
						color="#C0C0C0"
					/>
					<Text
					    style={styles.searchListItemTextStyle}
						numberOfLines={1}
					>
					Search
					</Text>
					<Icon
						name='add'
						color="#C0C0C0"
					/>
				</View>
			</Card>
			<Card
			    marginBottomProp={0}
			    backgroundColorProp={'white'}
			>
				<View style={styles.searchListItemStyle}>
					<Icon
						name='watch-later'
						color="#C0C0C0"
					/>
					<Text
					    style={styles.searchListItemTextStyle}
						numberOfLines={1}
					>
					Contains
					</Text>
					<Icon
						name='add'
						color="#C0C0C0"
					/>
				</View>
			</Card>
			</ScrollView>
		);
	}
};

const styles = StyleSheet.create({
	searchListItemStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10,
		marginBottom: 10,
		marginRight: 20,
		marginLeft: 20,

	},
	searchListItemTextStyle: {
        paddingTop: 5,
		fontSize: 13,
		marginLeft: 30,
		marginRight: 30,
		width: 275,
	}
});

export default SearchList;
