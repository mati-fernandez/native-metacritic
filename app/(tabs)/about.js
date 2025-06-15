import { ScrollView, Text } from 'react-native';
import { Screen } from '../../components/Screen';

export default function About() {
  return (
    <Screen>
      <ScrollView className="px-4">
        <Text className="mb-8 text-2xl font-bold text-white">About</Text>
        <Text className="mb-4 text-lg text-white">
          Rick and Morty is an animated sci-fi series that dives headfirst into
          the bizarre, hilarious, and often disturbing adventures of Rick
          Sanchez — a genius-level scientist with a total disregard for
          morality, authority, or basic hygiene — and his anxious, well-meaning
          grandson Morty Smith. What begins as simple trips across the galaxy
          quickly spirals into chaotic explorations of infinite realities, clone
          conspiracies, and time paradoxes, all wrapped in absurd humor and
          existential dread.
        </Text>
        <Text className="mb-4 text-lg text-white">
          The show masterfully blends high-concept science fiction with
          grounded, often dysfunctional family dynamics. Rick, with his portal
          gun and reckless brilliance, constantly drags Morty into increasingly
          dangerous and surreal situations, from intergalactic gameshows and
          mind-bending simulations to alternate timelines and encounters with
          god-like entities. Meanwhile, back home, Morty's family — including
          his insecure father Jerry, assertive mother Beth, and sarcastic sister
          Summer — deal with the emotional fallout of Rick’s actions and their
          own fractured relationships.
        </Text>
        <Text className="mb-4 text-lg text-white">
          At its core, Rick and Morty is a chaotic meditation on free will,
          identity, and the meaninglessness of the universe. Its genius lies in
          how it confronts those themes through grotesque comedy, sharp satire,
          and rapid-fire plot twists that constantly subvert expectations. No
          two episodes are alike, and the show routinely shifts tones from
          deeply philosophical to irreverently stupid — sometimes within a
          single scene.
        </Text>
        <Text className="mb-4 text-lg text-white">
          Since its debut, the series has built a massive cult following,
          praised for its originality, complexity, and the way it refuses to
          play by conventional storytelling rules. It's a show where nothing is
          sacred, everything is questioned, and even the most ridiculous
          characters can offer unexpectedly profound insights. Whether it's a
          pickle with a vendetta or a love story between parasites, Rick and
          Morty always finds a way to make the insane feel strangely meaningful.
        </Text>
        <Text className="mb-4 text-lg text-white">
          Ultimately, it’s not just about space travel or mad science — it’s a
          wild, unfiltered lens on the chaos of being human… or at least
          pretending to be one.
        </Text>
      </ScrollView>
    </Screen>
  );
}
