import { View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Logo } from '../components/Logo';
import { CircleInfoIcon } from '../components/Icons';

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitle: '',
          headerLeft: () => <Logo className="w-24 h-10" />,
          headerRight: () => (
            <Link href="/about">
              <CircleInfoIcon />
            </Link>
          ),
        }}
      />
    </View>
  );
}
