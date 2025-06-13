import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getCharacters, getCharacterDetails } from '../lib/rickmorty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Main() {
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {characters.map((c) => (
          <View key={c.id} style={styles.card}>
            <Image source={{ uri: c.image }} style={styles.image} />
            <Text style={styles.species}>{c.id}</Text>
            <Text style={styles.name}>{c.name}</Text>
            <Text style={styles.species}>{c.species}</Text>
            <Text style={styles.status}>{c.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: 107,
    marginBlock: 10,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  species: {
    fontSize: 16,
    color: '#eee',
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});
