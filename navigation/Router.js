import { createRouter } from '@expo/ex-navigation';

import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  settings: () => SettingsScreen,
  feed: () => FeedScreen,
  history: () => HistoryScreen,
  search: () => SearchScreen,
  favourites: () => FavouritesScreen,
  rootNavigation: () => RootNavigation,
}));
