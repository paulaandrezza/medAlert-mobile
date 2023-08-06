import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export function IconWrapper({ icon = null, children }) {
  return (
    <View className="flex-row items-center gap-x-4 mb-3">
      <View className="w-6">
        {icon && (
          <MaterialCommunityIcons name={icon} size={24} color="#f9fafb" />
        )}
      </View>

      <View className="h-12 flex-1 rounded-md bg-gray-800">{children}</View>
    </View>
  );
}
