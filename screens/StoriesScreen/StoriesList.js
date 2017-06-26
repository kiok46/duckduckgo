import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import StoriesDetail from './StoriesDetail';
import axios from 'axios';

class StoriesList extends Component {

	constructor(props) {
		super(props);
		this.state = { stories: [] };
	}

	componentWillMount(){
		axios.get("https://rallycoding.herokuapp.com/api/music_albums")
			.then(response => this.setState({ stories: response.data}));
	}

	renderStories() {
		return this.state.stories.map(story => <StoriesDetail key={story.title} story={story} />);
	}

	render () {
		return (
			<ScrollView>
				{this.renderStories()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#eeeeee',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'

	},
	textStyle: {
		fontSize: 20
	}
});

export default StoriesList;
