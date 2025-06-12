import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={{
          uri: 'https://www.metacritic.com/a/img/catalog/provider/7/2/7-1748896619.jpg',
        }}
        style={{ width: 215, height: 294 }}
      />

      <Text style={{ color: 'white' }}>
        Open up App.js to start working on your app!
      </Text>

      <Button title="Pulsa aquí" onPress={() => alert('Hola!')} />

      <Pressable
        onPress={() => {
          //Unused
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 32 : 16,
            }}
          >
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
