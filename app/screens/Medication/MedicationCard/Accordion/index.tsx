import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';

export function Accordion({
  isOpen,
  setIsOpen,
  children,
  actionButtons = false,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex flex-row h-12 justify-between items-center px-4"
      onPress={() => setIsOpen(!isOpen)}
    >
      <View className="flex-row items-center gap-x-4">{children}</View>
      <View className="flex-row items-center gap-x-1">
        {actionButtons && (
          <>
            <Button onPress={() => console.log('Pressed')} textColor="green">
              Editar
            </Button>
            <Button onPress={() => console.log('Pressed')} textColor="red">
              Excluir
            </Button>
          </>
        )}
        <FontAwesome
          name={isOpen ? 'caret-up' : 'caret-down'}
          size={16}
          color="#f9fafb"
        />
      </View>
    </TouchableOpacity>
  );
}
