import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export function CharacterCard({ c }) {
  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{ uri: c.image }} style={styles.image} />
        <Text style={styles.species}>{c.id}</Text>
        <Text style={styles.name}>{c.name}</Text>
        <Text style={styles.species}>{c.species}</Text>
        <Text style={styles.status}>{c.status}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 107,
    marginBlock: 10,
    alignSelf: 'center',
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
