import { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { getCharacters, getCharacterDetails } from '../lib/rickmorty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CharacterCard } from './CharacterCard';

export function Main() {
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {characters.length === 0 ? (
        <ActivityIndicator
          style={{
            paddingBlock: 'auto',
          }}
        />
      ) : (
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {characters.map((c) => (
            <CharacterCard key={c.id} c={c} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
