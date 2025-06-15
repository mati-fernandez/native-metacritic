import { Stack } from 'expo-router';
import { Logo } from '../components/Logo';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTitle: () => <Logo className="self-center w-48 h-20" />,
      }}
    />
  );
}
