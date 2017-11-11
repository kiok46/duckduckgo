import React, { Component } from 'react';
import { Text, TextInput, Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import StoriesDetail from './StoriesDetail';
import axios from 'axios';
import Colors from '../../constants/Colors';

import storyData from '../../constants/data';


class StoriesList extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount(){
		//axios.get("http://api.duckduckgo.com/?q=googl&format=json")
		//	.then(response => this.setState({ stories: response.data}));
	}

	getStoryData(story) {
		return (
			<StoriesDetail key={story.title}
						   StoryImage={story.urlToImage}
						   StoryAbstractURL={story.url}
						   StoryHeading={story.title}
				  />
			);
	}

	renderStories() {
		return (storyData.map(this.getStoryData));
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
