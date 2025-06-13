import { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
} from 'react-native';

export function CharacterCard({ c }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: c.image }} style={styles.image} />
      <Text style={styles.species}>{c.id}</Text>
      <Text style={styles.name}>{c.name}</Text>
      <Text style={styles.species}>{c.species}</Text>
      <Text style={styles.status}>{c.status}</Text>
    </View>
  );
}

export function AnimatedCharacterCard({ c, i }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: i * 250,
      useNativeDriver: false,
    }).start();
  }, [opacity, i]);

  return (
    <Animated.View style={{ opacity }}>
      <CharacterCard c={c} />
    </Animated.View>
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
