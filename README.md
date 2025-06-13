- [React Native Doc](https://reactnative.dev/docs/getting-started)

# Rick & Morty App (React Native + Expo)

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
* In React Native, there is no style inheritance like in web CSS. Each component must be styled explicitly. For example, color: "white" on a View container will not apply to nested Text elements.

### Expo
The StatusBar component in Expo manages the appearance of the device's status bar (the top bar showing time, battery, etc.). It lets you control its style, background color, and visibility to better match your app’s design and improve user experience.

### Pressable vs Button

* Button is simple but limited in customization.

* Pressable gives full control over styling and interaction feedback.

* It provides a pressed boolean in its render callback, allowing dynamic styles.

### Linting and Formatting

* Run npx expo lint to analyze your code for problems.

* Run npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier to install Prettier integration.
  * The first -- is to signal the end of Expo CLI arguments, passing the rest to npm.

* Updated .eslintrc.js to:
```
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
```
* Make sure to install the ESLint and Prettier extensions in your code editor.

#### Preserving the Status Bar space
To avoid ocuping the status bar space, we have some methods:

### Constants
`npx expo install expo-constants`
& then...
`import Constants from 'expo-constants';`
We installed expo-constants to handle status bar height and safe area issues, especially on Android.

SafeAreaView works well on iOS for avoiding notches and status bars, but on Android it doesn’t have full support. Instead, we use Constants.statusBarHeight from expo-constants to add top padding in the main container, so the UI doesn’t get hidden under the status bar.

This way, the layout looks consistent across platforms without relying only on SafeAreaView.

### 🛡️ SafeAreaProvider in React Native
- `react-native-safe-area-context` helps handle safe areas (notches, status bars, gesture areas).

- On Android, not all devices have notches, but there’s always a status/nav bar. On iOS, avoiding overlaps is essential.

- Wrap your app in `<SafeAreaProvider>` and use useSafeAreaInsets() to access top, bottom, left, and right.

```js
const insets = useSafeAreaInsets();
<View style={{ paddingTop: insets.top }} />
```
- It's a cross-platform, more reliable alternative to Constants.statusBarHeight, and responds to dynamic changes like rotation or device notch updates.

### Expo app bugs in Android emulator
**Issue:**
Using Ctrl+M (Reload) often causes JS debugger or Metro to break silently.

**Workaround:**
Uninstall Expo app manually from emulator