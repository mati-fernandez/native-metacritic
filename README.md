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

### Flexbox in React Native

By default, React Native uses only flexbox for layout.


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

### 🛡️SafeAreaProvider in React Native
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

### Reloading in the Emulator

To reload the app reliably, I manually close the app from the emulator and then press "a" in the terminal to reopen it. So far, this is the only way that works consistently. This method is helpful, for example, when testing the loader.

### Why Use FlatList Instead of ScrollView

In React Native, `ScrollView` renders all its child components at once, which can cause performance issues when dealing with large lists or dynamic data. This can lead to slow rendering and high memory usage.

`FlatList`, on the other hand, only renders what’s visible on the screen plus a small buffer, making it much more efficient for long lists. It also provides handy features like item recycling, pull-to-refresh, and better handling of scrolling performance.

#### Quick comparison:

- **ScrollView**:  
  Renders *all* children immediately. Good for small static lists.

- **FlatList**:  
  Renders only visible items dynamically. Ideal for large or infinite lists.

#### Basic example:

```jsx
// ScrollView (not recommended for large lists)
<ScrollView>
  {items.map(item => (
    <ItemComponent key={item.id} data={item} />
  ))}
</ScrollView>

// FlatList (recommended)
<FlatList
  data={items}
  keyExtractor={item => item.id}
  renderItem={({ item }) => <ItemComponent data={item} />}
/>
```
> ⚠️ keyExtractor is not necesary if you use "key" or "id".


### Using SVGR to adapt SVGs for React Native
SVGR is a tool that transforms SVG files into React components, simplifying how you use vector graphics in React Native apps. Since React Native doesn’t support raw SVGs directly, SVGR converts SVG markup into components using react-native-svg primitives.

#### How it works:
- You pass your SVG file to SVGR.
- It outputs a React component that uses react-native-svg elements like <Svg>, <Path>, etc.
- You import and use these components directly in your RN code.

**Benefits:**
- No need to manually rewrite SVG code for RN.
- Keeps SVG scalable and customizable via props.
- Simplifies managing multiple icons or illustrations as components.

**Usage tips:**
- Install react-native-svg first in your project `npx expo install react-native-svg`
- Use SVGR CLI or online to convert SVG files.
- Optionally customize SVGR config to suit your style or props.

This workflow optimizes SVG integration in React Native by bridging the gap between SVG files and RN's rendering model.

### 🛠 NativeWind and Tailwind CSS Setup
- **We installed NativeWind v2** to match the course version and maintain compatibility:
    `npm install nativewind@2`

- We also installed Tailwind CSS v3.3.2 with the `--save-dev` and `--save-exact` flags to prevent breaking changes:
    npm install `--save-dev --save-exact tailwindcss@3.3.2`

    > NativeWind’s official docs recommend version 3.3.2 as the maximum supported Tailwind version to ensure stability.
    > https://www.nativewind.dev/quick-starts/expo

- To initialize the Tailwind configuration file, we ran:
    `npx tailwindcss init`

- Tailwind config (tailwind.config.js):

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    };
    ```
- babel.config.js is required for NativeWind to work. If it wasn't auto-generated, create it manually:

    ```js
    module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: ['nativewind/babel'],
    };
    };
    ```
#### NativeWind v2 Limitations Note

- FlatList and other React Native core components do not support className directly in NativeWind v2.
- To apply Tailwind styles, wrap FlatList in a <View> and apply className to that container instead.
- Full className support for components like FlatList is only available in NativeWind v3.
- We’ll continue using v2 for this course.

### Routing Setup

We installed the following packages to set up navigation and routing in the app:
`npx expo install expo-router react-native-screens expo-linking`
- expo-router: A file-based routing system for Expo apps, similar to Next.js. It lets you organize screens as files/folders and handles navigation automatically.

- react-native-screens: Optimizes memory and performance for navigation by using native primitives to manage screen rendering.

- expo-linking: Enables deep linking support, allowing the app to respond to URLs and navigate accordingly (e.g., for web sharing or mobile app links).

These packages lay the foundation for implementing clean and scalable navigation within an Expo project.

### Routing & Linking Setup (Expo Router)

- Replaced "main": "index.js" with "main": "expo-router/entry" in package.json to enable file-based routing via expo-router.
- Added "scheme": "rickandmorty" in app.json to support deep linking.
- Created the /app directory to define route-based screens. Inside:
  - index.js renders the main screen.
  - _layout.js wraps all child routes with a shared layout.
- The Slot component from expo-router is used in _layout.js to render the currently active route. It allows consistent layout while navigating between pages.

### StyledPressable

We created a custom StyledPressable using nativewind to apply Tailwind classes:

```js
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);
```
This allows using className props directly for styling Pressable elements.

### 📘 Expo Router: Slot vs Stack
- `<Slot />`: This is a generic placeholder. It renders whatever is in that path without modifying headers or navigation. Ideal for simple screens or layouts without structured navigation.
- `<Stack />`: Automatically creates a navigation stack (like in native mobile). It manages headers, back buttons, screen animations, etc.

#### Changes when migrating from Slot to Stack:
- You can no longer wrap `<Stack />` in a View with justify-center / items-center, as it distorts the navigation layout.
- We removed the background (bg-black) from the parent View because Stack handles header and display styles separately.

