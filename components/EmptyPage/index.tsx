import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export function EmptyPage({ navigation, route, text, textButton }) {

  const handleAdd= () => {
    navigation.navigate(route);
  };

  return (
    <View className="flex flex-1 w-3/4 items-center justify-center gap-y-4">
      <Text className="text-gray-50 text-center">
        {text}
      </Text>
      <Button className="underline hover:text-gray-50" mode="contained" onPress={handleAdd}>
        {textButton}
      </Button>
    </View>
  )
}
