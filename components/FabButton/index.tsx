import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export function FabButton({ addButton }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="absolute bottom-4 right-4 z-10 rounded-full bg-pink-400 p-4"
      onPress={(e) => {
        e.preventDefault();
        addButton();
      }}
    >
      <AntDesign name="plus" size={24} color="#f9fafb" />
    </TouchableOpacity>
  );
}
