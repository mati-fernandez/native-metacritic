import { Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import { useEffect, useState } from 'react';
import { getCharacterDetails } from '../lib/rickmorty';
import { ActivityIndicator, ScrollView } from 'react-native';

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [charInfo, setCharInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getCharacterDetails(id).then(setCharInfo);
    }
  }, [charInfo]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#ffee00' },
          headerTintColor: 'black',
          headerLeft: () => {},
          headerTitle: 'Character detail',
          headerRight: () => {},
        }}
      />
      <View>
        {charInfo === null ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <ScrollView>
            <Text className="mb-8 text-2xl font-bold text-white">
              Character detail {id}
            </Text>
            <Text className="text-white">{charInfo.name}</Text>
            <Link href="/" className="text-blue-500">
              Back
            </Link>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
