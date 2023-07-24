import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";

export function Accordion({isOpen, setIsOpen, children}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex flex-row h-12 justify-between items-center px-4"
      onPress={() => setIsOpen(!isOpen)}
    >
      <View className='flex-row items-center gap-x-4'>
        {children}
      </View>
      <FontAwesome name={isOpen ? 'caret-up' : 'caret-down'} size={16} color="#f9fafb" />
    </TouchableOpacity>
  );
}
