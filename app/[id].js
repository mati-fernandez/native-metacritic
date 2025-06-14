import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <View>
        <Text className="mb-8 text-2xl font-bold text-white">
          Character detail {id}
        </Text>
        <Link href="/" className="text-blue-500">
          Back
        </Link>
      </View>
    </Screen>
  );
}
