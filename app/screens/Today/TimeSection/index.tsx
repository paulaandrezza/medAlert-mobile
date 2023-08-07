import { Text, View } from 'react-native';
import { ReminderCard } from './ReminderCard';

export default function TimeSection({ currentTime = false }) {
  return (
    <View className="flex-row justify-between">
      <Text className="font-body text-gray-100 w-20 px-3 text-base text-right">
        10:00
      </Text>
      <View
        className={`h-full w-[2] mb-3 ${
          currentTime ? 'bg-pink-400' : 'bg-gray-500'
        } items-center`}
      >
        <View
          className={`h-4 w-4 rounded-lg ${
            currentTime ? 'bg-pink-400' : 'bg-gray-500'
          }`}
        ></View>
      </View>
      <View className="flex-1 px-3">
        <ReminderCard />
        <ReminderCard />
        <View className="w-full h-[1] mb-3 bg-gray-500"></View>
      </View>
    </View>
  );
}
