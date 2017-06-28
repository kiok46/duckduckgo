import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { List, ListItem } from 'react-native-elements';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class SettingsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
          <FontAwesome
              name={'cog'}
              size={24}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />

      ),
      header: (
          <View style={{ backgroundColor: Colors.tintColor }}>
            <View style={{ marginTop: 24 }} >
              <Search
                backgroundColor={Colors.tintColor}
                tintColorSearch="purple"
                color= 'black'
                tintColorSearch={Colors.darkTintColor}
                ref="search_box"
                placeholder="Search DuckDuckGo"
              />
            </View>
          </View>
      )

  });

  async componentDidMount() {
    // AsyncStorage.clear()
    await this.props.changeAutocompleteSetting(true);
    await this.props.changeQuackOnRefreshSetting(true);
    await this.props.changeSaveRecentSetting(true);
  }

  onChangeQuackOnRefresh = () => {
    this.props.changeQuackOnRefreshSetting();
  }

  onChangeAutoComplete = () => {
      this.props.changeAutocompleteSetting();
  }

  onChangeSaveRecents = () => {
      this.props.changeSaveRecentSetting();
  }

  onDefaultStorySetting = () => {
      this.props.navigation.navigate('defaultStorySetting');
  }

  onReadabilitySetting = () => {
      this.props.navigation.navigate('readabilitySetting');
  }

  onRegionSetting = () => {
      this.props.navigation.navigate('regionSetting');
  }

  onSourcesSetting = () => {
      this.props.navigation.navigate('sourcesSetting');
  }


  render() {
    return (
          <ScrollView style={styles.settigsGreyBackground}>
            <InfoText
                text="General"
            / >
            <List>
                <ListItem
                    title='Home'
                    rightTitle="Stories (Default)"
                    onPress={this.onDefaultStorySetting}
                />
            </List>
            <InfoText
                text="Stories"
            / >
            <List>
                <ListItem
                    title='Sources'
                    onPress={this.onSourcesSetting}
                />
                <ListItem
                    title='Readability'
                    onPress={this.onReadabilitySetting}
                />
                <ListItem
                    title='Quack on Refresh'
                    switchButton={true}
                    hideChevron
                    switchOnTintColor={Colors.tintColor}
                    switched={this.props.quack_on_refresh}
                    onSwitch={this.onChangeQuackOnRefresh}
                />
            </List>
            <InfoText
                text="Search"
            / >
            <List>
                <ListItem
                    switchButton={true}
                    title='Autocomplete'
                    hideChevron
                    switchOnTintColor={Colors.tintColor}
                    switched={this.props.autocomplete}
                    onSwitch={this.onChangeAutoComplete}
                />
                <ListItem
                    title='Region'
                    rightTitle="None (Default)"
                    onPress={this.onRegionSetting}
                />
            </List>
            <InfoText
                text="Privacy"
            / >
            <List>
                <ListItem
                    switchButton={true}
                    title='Save Recents'
                    hideChevron
                    switchOnTintColor={Colors.tintColor}
                    switched={this.props.save_recent}
                    onSwitch={this.onChangeSaveRecents}
                />
                <ListItem
                    title='Clear Recents'
                    hideChevron
                />
            </List>
            <InfoText
                text="Other"
            / >
            <List>
                <ListItem
                    title='Send Feedback'
                />
                <ListItem
                    title='Share'
                />
                <ListItem
                    title='Leave a Rating'
                />
            </List>
            <InfoText
                text="Version 0.1.1"
            / >
        </ScrollView>
    );
  }
}


class InfoText extends Component {
    render() {
        return (
            <Text
                style={styles.infoTextStyle}
            >
            {this.props.text}
            </Text>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reduceHeight: {
      height: 5,
  },
  infoTextStyle: {
      paddingTop: 10,
      marginLeft: 20,
      color: "black",
      opacity: .7,
  },
  settigsGreyBackground: {
      backgroundColor: 'rgba(247, 247, 247, 1)'
  }
});


const mapStateToProps = (state) => {
	return {
		autocomplete: state.LoadSettings.autocomplete,
        quack_on_refresh: state.LoadSettings.quack_on_refresh,
        save_recent: state.LoadSettings.save_recent,

	};
}


export default connect(mapStateToProps, actions)(SettingsScreen);
