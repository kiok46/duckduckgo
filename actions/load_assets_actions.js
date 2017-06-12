import { FontAwesome } from '@expo/vector-icons';
import cacheAssetsAsync from '../utilities/cacheAssetsAsync';

import {
	LOAD_ASSETS
} from './types';

const loadAssets = () => async (dispatch) => {
	try {
      await cacheAssetsAsync({
        images: [require('./assets/images/expo-wordmark.png')],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      });

	  dispatch({
		  type: LOAD_ASSETS,
		  payload:
	  })

    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
		console.log("finally")
      // this.setState({ appIsReady: true });
    }
}
