import { FontAwesome } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

export function BottomNavigation({ items, activeItem, onChange }) {
  return (
    <View className="absolute inset-x-0 bottom-0 z-10 h-16 w-full flex-row rounded-t-lg bg-gray-900">
      <View className="w-full flex-row gap-2">
        {items.map((item, index) => (
          <TouchableOpacity
            key={item.label}
            activeOpacity={0.7}
            className="h-full flex-1 flex-col items-center justify-center"
            onPress={(e) => {
              e.preventDefault()
              onChange(index)
            }}
          >
            <FontAwesome
              name={item.icon}
              size={24}
              color={activeItem === index ? '#f472b6' : '#f9fafb'}
            />
            <Text
              className={`${
                activeItem === index ? 'text-pink-400' : 'text-gray-50'
              } font-body`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
