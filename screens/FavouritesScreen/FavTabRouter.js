import {
  TabRouter,
} from 'react-navigation';
import FavSearchesTab from './FavSearchesTab';
import FavStoriesTab from './FavStoriesTab';

const FavTabRouter = TabRouter(
  {
    FavSearches: {
      screen: FavSearchesTab,
      path: '',
    },
    FavStories: {
      screen: FavStoriesTab,
      path: 'FavStories',
    }
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'FavSearches',
  }
);

export default FavTabRouter;
