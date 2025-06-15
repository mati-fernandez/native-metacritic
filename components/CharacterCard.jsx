import { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from 'react-native';
import { Gender } from './Gender';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function CharacterCard({ c }) {
  return (
    <Link href={`/${c.id}`} asChild>
      <StyledPressable className="m-3 border border-white rounded-xl active:scale-95">
        <View className="flex-row p-4 bg-gray-900 rounded-xl">
          <Image source={{ uri: c.image }} style={styles.image} />
          <View className="ml-4">
            <Text style={styles.species}>{c.id}</Text>
            <Text style={styles.name}>{c.name}</Text>
            <Gender c={c} />
            <Text style={styles.species}>{c.species}</Text>
            <Text style={styles.status}>{c.status}</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
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
