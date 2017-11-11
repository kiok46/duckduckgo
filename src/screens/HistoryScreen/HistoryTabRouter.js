import {
  TabRouter,
} from 'react-navigation';
import RecentSearchesTab from './RecentSearchesTab';
import RecentStoriesTab from './RecentStoriesTab';

const HistoryTabRouter = TabRouter(
  {
    RecentStories: {
      screen: RecentStoriesTab,
      path: 'RecentStories',
    },
    RecentSearches: {
      screen: RecentSearchesTab,
      path: 'RecentSearches',
    }
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'RecentStories',
  }
);

export default HistoryTabRouter;
