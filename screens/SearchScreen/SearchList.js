import React, { Component } from 'react';
import { Text, View, AsyncStorage, Dimensions, Image, ScrollView, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';
import Colors from '../../constants/Colors';

import { connect } from 'react-redux';
import * as actions from '../../actions';

var { height, width } = Dimensions.get('window');


class SearchList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			p: "k"
		}
	}

	async componentWillMount() {
      // AsyncStorage.clear()
      await this.props.getSearchHistory(searchQuery="p");
    }

    onPressSearchHistoryItem = () => {
		this.setState({p: "p"})
	}

	render () {
		console.log(this.props.search_history_items)
		console.log("---p---")
		return (
			<ScrollView style={{ marginTop: 20, height: height}}>
			{ this.props.search_history_items.map((i, j) =>
				<TouchableOpacity
				    key={j}
					onPress={this.onPressSearchHistoryItem}
				>
				<Card
				    marginBottomProp={0}
					backgroundColorProp={'white'}
				>
					<View style={styles.searchListItemStyle}>
						<Icon
							name='watch-later'
							color={Colors.iconGrey}
						/>
						<Text
						    style={styles.searchListItemTextStyle}
							numberOfLines={1}
						>
						Search + {this.state.p} + {i}
						</Text>
						<Icon
							name='add'
							color={Colors.iconGrey}
						/>
					</View>
				</Card>
				</TouchableOpacity>

			)

		    }

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
		marginLeft: 15,
		marginRight: 15,
		width: Dimensions.get('window').width*(.7) -25,
	}
});


const mapStateToProps = (state) => {
	return {
		search_history_items: state.SearchReducer.search_history_items,

	};
}


export default connect(mapStateToProps, actions)(SearchList);
