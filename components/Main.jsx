import { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { getCharacters, getCharacterDetails } from '../lib/rickmorty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedCharacterCard } from './CharacterCard';
import { Screen } from '../components/Screen';

export function Main() {
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <Screen>
      {characters.length === 0 ? (
        <ActivityIndicator className="flex-1" />
      ) : (
        <FlatList
          data={characters}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard c={item} i={index} />
          )}
        />
      )}
    </Screen>
  );
}
