import { View } from "react-native";
import { EmptyPage } from "../../../components/EmptyPage";

export default function Profile({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950 px-4">
      <EmptyPage text={"Você ainda não possui nenhum perfil cadastrado!"} textButton={"CADASTRAR USUÁRIO"} navigation={navigation} route={"screens/Profile/NewProfile/index"} />
    </View>
  );
}
