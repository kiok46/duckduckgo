import {
  TabRouter,
} from 'react-navigation';
import FavSearchesTab from './FavSearchesTab';
import FavStoriesTab from './FavStoriesTab';

const FavTabRouter = TabRouter(
  {
    FavStories: {
        screen: FavStoriesTab,
        path: 'FavStories',
    },
    FavSearches: {
      screen: FavSearchesTab,
      path: 'FavSearches',
    }

  },
  {
    // Change this to start on a different tab
    initialRouteName: 'FavStories',
  }
);

export default FavTabRouter;
