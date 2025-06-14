import { Text } from 'react-native';

export const Gender = ({ c }) => {
  return (
    <Text
      className={`px-1 ${c.gender === 'Male' ? 'bg-blue-800' : c.gender === 'Female' ? 'bg-pink-800' : 'bg-gray-800'} rounded-md color-white self-start`}
    >
      {c.gender}
    </Text>
  );
};
