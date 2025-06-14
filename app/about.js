import { Pressable, ScrollView, Text } from 'react-native';
import { Link } from 'expo-router';
import { HomeIcon } from '../components/Icons';
import { Screen } from '../components/Screen';

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link href="/" asChild>
          <Pressable>
            <HomeIcon className="mb-4" />
          </Pressable>
        </Link>
        <Text className="mb-8 text-2xl font-bold text-white">
          About the project
        </Text>
        <Text className="mb-4 text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione repellat blanditiis numquam aspernatur
          voluptatum reiciendis error! Libero assumenda illum beatae id placeat
          neque quis ipsum, perferendis, sit blanditiis quae.
        </Text>
        <Text className="mb-4 text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione repellat blanditiis numquam aspernatur
          voluptatum reiciendis error! Libero assumenda illum beatae id placeat
          neque quis ipsum, perferendis, sit blanditiis quae.
        </Text>
        <Text className="mb-4 text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione repellat blanditiis numquam aspernatur
          voluptatum reiciendis error! Libero assumenda illum beatae id placeat
          neque quis ipsum, perferendis, sit blanditiis quae.
        </Text>
        <Text className="mb-4 text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione repellat blanditiis numquam aspernatur
          voluptatum reiciendis error! Libero assumenda illum beatae id placeat
          neque quis ipsum, perferendis, sit blanditiis quae.
        </Text>
        <Text className="mb-4 text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione repellat blanditiis numquam aspernatur
          voluptatum reiciendis error! Libero assumenda illum beatae id placeat
          neque quis ipsum, perferendis, sit blanditiis quae.
        </Text>
        <Text className="mb-4 text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione repellat blanditiis numquam aspernatur
          voluptatum reiciendis error! Libero assumenda illum beatae id placeat
          neque quis ipsum, perferendis, sit blanditiis quae.
        </Text>
      </ScrollView>
    </Screen>
  );
}
