import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';


class StoriesDetail extends Component {

	constructor(props) {
		super(props);
		const { title, artist, thumbnail_image } = props.story;
	}
	render () {
		return (
			<Card marginBottomProp={10}>
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
						{"Album's name is "+ this.props.story.title}
						</Text>
					</View>
				</CardSection>
				<View style={styles.storyOverlay}>
				    <TouchableOpacity style={styles.storyTypeStyle}>
						<Text style={styles.storyTypeTextStyle}>
						    LightHearted
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.storyTypeMenuStyle}>
						<Icon
							name='more-horiz'
							color='#fff'
						/>
					</TouchableOpacity>
				</View>
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
		fontSize: 14,
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
	},
    storyOverlay: {
      flex: 1,
	  marginTop: 10,
	  height: 30,
      position: 'absolute',
      right: 0,
      top: 0,
	  justifyContent: 'space-around',
      flexDirection: 'row',
	  // opacity: 0.5,
	  // backgroundColor: 'black',
    },
    storyTypeStyle: {
		backgroundColor: 'black',
		opacity: 0.6,
		marginRight: 10,
		borderRadius: 5,
		padding: 3,
		alignContent: 'center'
	},
	storyTypeTextStyle: {
        color: 'white',
		fontSize: 13,
		paddingTop: 3
	},
	storyTypeMenuStyle: {
		backgroundColor: 'black',
		opacity: 0.6,
		marginRight: 10,
		borderRadius: 5,
		padding: 3
	}
});

export default StoriesDetail;
