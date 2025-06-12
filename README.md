# Metacritic App (React Native + Expo)

### Project Setup

* Created with `npx create-expo-app@latest --template blank`
* Chose the `blank` template instead of the tabs one

### Running the Project

* Use **npm start** to launch with all options (recommended)
* Press **"a"** to open the app on Android, but **make sure an emulator is already running** from Android Studio
* Expo can launch Android if it detects active emulators even if Android Studio isn’t explicitly opened

### Android

* `npm run android` requires an open emulator or a connected device
* If none is found, it throws: `No Android connected device found`

### Web Support

* Installed dependencies: `react-dom`, `react-native-web`, `@expo/metro-runtime` via `npx expo install` to enable web support
* Useful to run and showcase the app in browsers for portfolio or previews

### Components

* `View` elements are like `div`s in web but have `display: flex` by default.
* `<Text>` is like `<p>` in HTML.