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
  MenuContext
} from 'react-native-popup-menu';


class StoriesDetail extends Component {

	constructor(props) {
		super(props);
		this.state = { opened: false }
	}



	closeMenu = () => {
		this.setState({ opened: false })
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

					<TouchableOpacity style={styles.storyTypeMenuStyle}>
					  <MenuContext ref="StoryMenuContext">
						<Menu opened={this.state.opened}>
							<MenuTrigger onPress={() => this.setState({ opened: true })}>
								<Icon
									name='more-horiz'
									color='#fff'
								/>
							</MenuTrigger>
							<MenuOptions customStyles={optionsStyles}>
								<MenuOption value={1} style={{  }}>
									<Text onPress={() => {
									  this.closeMenu()
								  }}>Add to Favourites</Text>
								</MenuOption>
								<MenuOption value={1} style={{  }}>
									<Text onPress={() => {
									  this.closeMenu()
								  }}>Share</Text>
								</MenuOption>
								<MenuOption value={1} style={{  }}>
									<Text onPress={() => {
									  this.closeMenu()
								  }}>View in Browser</Text>
								</MenuOption>
							</MenuOptions>
						</Menu>
					  </MenuContext>
					</TouchableOpacity>
				</View>
			</Card>
		);
	}
};

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'white',
    padding: 5,
    marginLeft: -175,
    marginTop: 25,
  },
  optionWrapper: {
    backgroundColor: 'white',
    margin: 2
  },

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
		backgroundColor: 'rgba(0, 0, 0, .6)',
		opacity: 1,
		marginRight: 10,
		borderRadius: 5,
		padding: 3
	}
});

export default StoriesDetail;
