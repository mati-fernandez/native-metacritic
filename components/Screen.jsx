import { View } from 'react-native';

export function Screen({ children }) {
  return <View className="flex-1 pt-4 bg-black">{children}</View>;
}
