import { Text, View } from 'react-native'

export function Header({ label }) {
  return (
    <View className="mb-3 h-24 w-full justify-end px-4 py-4">
      <Text className="font-title text-xl text-gray-50">{label}</Text>
    </View>
  )
}
