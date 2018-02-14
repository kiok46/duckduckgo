import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Card from '../../components/Card';
import CardSection from '../../components/CardSection';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
	renderers
} from 'react-native-popup-menu';


class StoriesDetail extends Component {

	constructor(props) {
		super(props);
        this.storyMenuContext = null;
	}

	openLink = (url) => {
		Linking.canOpenURL(url).then(supported => {
			if (supported) {
				Linking.openURL(url);
			} else{
				alert('Failed to open in browser');
			}
		});
	}

	render () {
		const { StoryImage, StoryAbstractURL, StoryHeading } = this.props;

		return (
			<Card marginBottomProp={10}>
				<CardSection>
					<Image
						style={styles.imageStyle}
						source={{ uri: StoryImage }}/>
				</CardSection>
				<CardSection>
					<View style={styles.thumbnailContainerStyle}>
						<Image
						 	style={styles.thumbnailStyle}
							source={{ uri: this.props.StoryImage }}/>
					</View>
					<View style={styles.headerContentStyle}>
						<Text
							style={styles.headerTextStyle}
							numberOfLines={2}
						>
						{StoryHeading}
						</Text>
					</View>
				</CardSection>
				<View style={styles.storyOverlay}>
				    <TouchableOpacity style={styles.storyTypeStyle}>
						<Text style={styles.storyTypeTextStyle}>
						    LightHearted
						</Text>
					</TouchableOpacity>

					<Menu renderer={renderers.Popover}>
						<MenuTrigger style={styles.storyTypeMenuStyle} customStyles={customStyles}>
							<Icon
								name='more-horiz'
								color='#fff'
							/>
						</MenuTrigger>
						<MenuOptions customStyles={optionsStyles}>
							<MenuOption onSelect={() => alert('Add to Favourites')} text='Add to Favourites' />
							<MenuOption onSelect={() => alert('Shared')} text='Share' />
							<MenuOption onSelect={() => this.openLink(StoryAbstractURL)} text='View in Browser' />
						</MenuOptions>
					</Menu>
				</View>
			</Card>
		);
	}
};

const optionsStyles = {
  optionsContainer: {
    padding: 5
  },
  optionWrapper: {
    margin: 5
  },

};

const customStyles = {
	TriggerTouchableComponent: TouchableOpacity
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
		backgroundColor: 'rgba(0, 0, 0, .6)',
		opacity: 1,
		marginRight: 10,
		borderRadius: 5,
		padding: 3
	}
});

export default StoriesDetail;
