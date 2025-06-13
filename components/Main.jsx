import { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getCharacters, getCharacterDetails } from '../lib/rickmorty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedCharacterCard, CharacterCard } from './CharacterCard';
import { Logo } from './Logo';

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
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View style={{ marginBottom: 20, maxHeight: 60 }}>
        <Logo />
      </View>
      {characters.length === 0 ? (
        <ActivityIndicator
          style={{
            paddingBlock: 'auto',
          }}
        />
      ) : (
        <FlatList
          data={characters}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard c={item} i={index} />
          )}
          contentContainerStyle={styles.cardContainer}
        />
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
