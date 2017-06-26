import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';


class StoriesDetail extends Component {

	constructor(props) {
		super(props);
		const { title, artist, thumbnail_image } = props.story;
	}
	render () {
		return (
			<Card>
				<CardSection>
					<Image
						style={styles.imageStyle}
						source={{ uri: this.props.story.image }}/>
				</CardSection>
				<CardSection>
					<View style={styles.thumbnailContainerStyle}>
						<Image
						 	style={styles.thumbnailStyle}
							source={{ uri: this.props.story.thumbnail_image }}/>
					</View>
					<View style={styles.headerContentStyle}>
						<Text
							style={styles.headerTextStyle}
							numberOfLines={2}
						>
						{this.props.story.title + "Lorem ac  Lorem Loremn Lorem Lorem Loremn Lorem Lorem Loremn"}
						</Text>
					</View>
				</CardSection>

			</Card>
		);
	}
};

const styles = StyleSheet.create({
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 12,
        marginRight: 25,
        paddingRight: 25,
        alignContent: 'center'
	},
	thumbnailStyle: {
		height: 40,
		width: 40
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	imageStyle: {
		height: 150,
		flex: 1,
		width: null
	}
});

export default StoriesDetail;
