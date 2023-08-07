import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function ReminderCard() {
  const [isTaken, setTaken] = useState(false);
  const toggleSwitch = () => setTaken(!isTaken);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`mb-2 h-fit w-full flex-row items-center justify-between rounded-2xl px-6 py-4 ${
        isTaken ? 'bg-gray-900' : 'bg-gray-800'
      }`}
      onPress={() => {
        setTaken(!isTaken);
      }}
    >
      <View className="flex-1 gap-1">
        <Text
          className={`font-body text-lg text-pink-400 ${
            isTaken && 'line-through'
          }`}
        >
          Amoxilina
        </Text>
        <Text className={`font-body text-gray-50 ${isTaken && 'line-through'}`}>
          2 comprimidos
        </Text>
      </View>
      <View className="h-full max-h-full justify-between">
        <View className="p-2">
          <MaterialCommunityIcons name="pill" size={18} color="#f9fafb" />
        </View>
        <Text className={`font-body text-gray-50 ${isTaken && 'line-through'}`}>
          Paula
        </Text>
      </View>
    </TouchableOpacity>
  );
}
