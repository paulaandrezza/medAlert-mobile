import { Text, TouchableOpacity } from "react-native";

export function Button() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex h-8 items-center justify-center rounded-full bg-pink-400 px-4"
      onPress={(e) => {
        e.preventDefault();
      }}
    >
      <Text className="text-gray-50">Salvar</Text>
    </TouchableOpacity>
  );
}
