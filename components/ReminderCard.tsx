import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function ReminderCard() {
  return (
    <View className="h-fit w-full flex-row items-center justify-between rounded-lg bg-gray-900 px-6 py-4">
      <View className="flex-1 gap-4">
        <Text className="font-body text-pink-400">Margarida</Text>
        <Text className="font-title text-5xl text-gray-50">10:00</Text>
        <Text className="font-body text-gray-50">Azitromicina</Text>
      </View>
      <View className="h-full flex-1 items-end gap-5">
        <TouchableOpacity className="rounded-full bg-gray-700 p-1">
          <AntDesign name="down" size={20} color="#f9fafb" />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full bg-gray-700 p-3">
          <MaterialCommunityIcons name="pill" size={32} color="#f9fafb" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
