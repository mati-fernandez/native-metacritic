import { Image, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import { useEffect, useState } from 'react';
import { getCharacterDetails } from '../lib/rickmorty';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Gender } from '../components/Gender';

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [charInfo, setCharInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getCharacterDetails(id).then(setCharInfo);
    }
  }, []);

  console.log('charInfo', charInfo);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#a9d3e9' },
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
          <ScrollView
            contentContainerStyle={{
              width: '100%',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <View className="justify-center h-full -translate-y-10 w-[214]">
              <Image
                className="mb-2 rounded"
                source={{ uri: charInfo.image }}
                style={{ width: 214, height: 294 }}
              />
              <Text className="self-start text-2xl font-bold text-white ">
                {charInfo.name}
              </Text>
              <Text className="text-white">Gender: {charInfo.gender}</Text>
              <Text className="text-white">Type: {charInfo.species}</Text>
              <Text className="text-white">
                Episodes: {charInfo.episodeCount}
              </Text>
              <Text className="text-white">Location: {charInfo.location}</Text>
              <Text className="text-white">Origin: {charInfo.origin}</Text>
              <Text className="text-base font-bold text-green-500">
                Status: {charInfo.status}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
