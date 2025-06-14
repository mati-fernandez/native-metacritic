import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './components/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="items-center justify-center flex-1 p-2 bg-black">
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
