# DuckDuckGo
Unofficial DuckDuckGo app built in React Native

*Note: This is not the official DuckDuckGo App but a Fan-made. I made it only for Learning purpose.*

Find it on Expo: https://exp.host/@kiok46/duckduckgo-rn

<img src="screenshots/cover.png">


### How to run via expo?

Use the `expo-branch` branch to run the application using expo, please do the following:
```
npm install exp --global
git clone https://github.com/kiok46/duckduckgo.git
cd duckduckgo
git checkout expo-branch
npm install
```

Method: 1
```
exp start
scan the QR-code and test it on real device
```

Method: 2

`Open the expo app on your device and open the project`


### How to run without expo?

Please do the following to run.
```
git clone https://github.com/kiok46/duckduckgo.git
cd duckduckgo && npm install
```
then run `react-native run-ios` or `react-native run-android`

### Does search work?

The app is using a sample data which is in `src/constants/data.json`

You can use DuckDuckGo's API or any other API api by updating the `SearchList` component from here `componentWillMount` when `onSubmitEditingSearch` gets called.

Showing the search results wasn't the main goal but the UI when building the app. But sure PR is welcome. :)

### Android

<img src="screenshots/stories.jpg?raw=true" width="270"> <img src="screenshots/search.jpg?raw=true" width="270"> <img src="screenshots/favourites.jpg?raw=true" width="270">

### iOS

<img src="screenshots/settings.PNG?raw=true" width="270"> <img src="screenshots/recent_searches.PNG?raw=true" width="270"> <img src="screenshots/defaulttab.PNG?raw=true" width="270">


### Blogs and Gists

Some of the gists which I wrote when I was building the application.

-  [NoItemComponent](https://gist.github.com/kiok46/7f183b4b2556b7151fb811bfa8e5dbb0)
-  [Change the Color of Custom tabs when they change.](https://gist.github.com/kiok46/88bb4eccc3bebebef6253a5ea87691b8)
-  [Search HistoryCard List like in DuckDuckGo app.](https://gist.github.com/kiok46/74a97fbf34ecfd188544f3b676164c56)
-  [Cool cards, with overlay buttons like in DuckDuckGo app.](https://gist.github.com/kiok46/0ca892d2b377827098937f0d0b2daf9e)
-  [Custom Tabs in React-Navigation) values.](https://gist.github.com/kiok46/eb446d86210707e836603258528fcf3c)
-  [Setup AsyncStorage and store boolean(true/false) values.](https://gist.github.com/kiok46/421dbc17843212118d78c2fe2cd35c2c)
-  [Action Creators and Reducers](https://gist.github.com/kiok46/eed0dd78719405b1ccad12edeb1139af)
-  [Redux Setup](https://gist.github.com/kiok46/724320960a3f4c6f81612d63bfa9b218)


### Want to contribute or need to see some improvements?
I would love that, please create an issue or send a PR.
