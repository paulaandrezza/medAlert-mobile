import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function MedicationCard() {
  return (
    <View className="mb-2 grid h-fit w-full grid-cols-1 rounded-2xl bg-gray-800 px-6 py-4">
      <View className="items-end">
        <TouchableOpacity activeOpacity={0.7} className="p-2">
          <FontAwesome name="pencil" size={20} color="#f9fafb" />
        </TouchableOpacity>
      </View>

      <View className="mb-4 flex-row items-center gap-x-4">
        <Ionicons name="person" size={24} color="#f9fafb" />
        <View>
          <Text className="font-body text-base text-gray-50">
            Paula Marinho
          </Text>
        </View>
      </View>

      <View className="mb-4 flex-row items-start gap-x-4">
        <MaterialCommunityIcons name="pill" size={24} color="#f9fafb" />
        <View>
          <Text className="font-body text-gray-50">Amoxilina</Text>
          <Text className="font-body text-gray-50">2 comprimidos</Text>
        </View>
      </View>

      <View className="flex-row items-start gap-x-4">
        <FontAwesome name="bell-o" size={24} color="#f9fafb" />
        <View>
          <Text className="font-body text-gray-50">Horários</Text>
          <Text className="font-body text-gray-50">04:00</Text>
          <Text className="font-body text-gray-50">10:00</Text>
          <Text className="font-body text-gray-50">16:00</Text>
          <Text className="font-body text-gray-50">22:00</Text>
        </View>
      </View>
    </View>
  );
}
