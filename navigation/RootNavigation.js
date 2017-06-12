import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Notifications } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync
  from '../api/registerForPushNotificationsAsync';

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  renderHeader = () => {
      return (<Text>hi</Text>);
  }

  render() {
    return (
      <TabNavigation tabBarHeight={56} initialTab="search" renderHeader={this._renderHeader}>
        <TabNavigationItem
          id="search"
          renderIcon={isSelected => this._renderIcon('search', isSelected)}>
          <StackNavigation initialRoute="search" />
        </TabNavigationItem>

        <TabNavigationItem
          id="feed"
          renderIcon={isSelected => this._renderIcon('newspaper-o', isSelected)}>
          <StackNavigation initialRoute="feed" />
        </TabNavigationItem>

        <TabNavigationItem
          id="favourites"
          renderIcon={isSelected => this._renderIcon('heart', isSelected)}>
          <StackNavigation initialRoute="favourites" />
        </TabNavigationItem>

        <TabNavigationItem
          id="history"
          renderIcon={isSelected => this._renderIcon('clock-o', isSelected)}>
          <StackNavigation initialRoute="history" />
        </TabNavigationItem>

        <TabNavigationItem
          id="settings"
          renderIcon={isSelected => this._renderIcon('cog', isSelected)}>
          <StackNavigation initialRoute="settings" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={24}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
