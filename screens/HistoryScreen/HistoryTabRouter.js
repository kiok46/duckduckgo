import {
  TabRouter,
} from 'react-navigation';
import RecentSearchesTab from './RecentSearchesTab';
import RecentStoriesTab from './RecentStoriesTab';

const HistoryTabRouter = TabRouter(
  {
    RecentSearches: {
      screen: RecentSearchesTab,
      path: '',
    },
    RecentStories: {
      screen: RecentStoriesTab,
      path: 'RecentStories',
    }
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'RecentSearches',
  }
);

export default HistoryTabRouter;
