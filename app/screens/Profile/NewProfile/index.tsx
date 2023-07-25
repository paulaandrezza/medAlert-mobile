import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";
import Select from "../../../../components/Select";
import TimePicker from "../../../../components/TimePicker";

const gender = [
  {
    label: "Feminino",
    value: "female",
  },
  {
    label: "Masculino",
    value: "male",
  },
  {
    label: "Prefiro não responder",
    value: null,
  }
]

export default function NewProfile() {
  const [name, setName] = useState("")
  const [birth, setBirth] = useState<Date>();
  const [height, setHeight] = useState<number | string>("")
  const [weight, setWeight] = useState<number | string>("")

  return (
    <ScrollView className="mb-2 grid h-fit w-full grid-cols-1 gap-y-3 px-4 py-4">
      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <Ionicons name="person" size={24} color="#f9fafb" />
        </View>
        <View className="w-full flex-1">
          <TextInput
            className="h-12 w-full rounded-t-md bg-gray-800 font-body"
            onChangeText={setName}
            value={name}
            label="Nome"
            underlineColor="#f472b6"
            activeUnderlineColor="#f472b6"
            textColor="#f9fafb"
          />
        </View>
      </View>

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <FontAwesome name="calendar" size={24} color="#f9fafb" />
        </View>
        <View>
          <TimePicker setFirstTime={setBirth} mode={"date"} placeholder={"Selecione a data de nascimento"} />
        </View>
      </View>

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <FontAwesome name="transgender" size={24} color="#f9fafb" />
        </View>
        <View className="h-12 flex-1 rounded-md bg-gray-800">
          <Select options={gender} />
        </View>
      </View>

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <MaterialCommunityIcons name="human-male-height-variant" size={24} color="#f9fafb" />
        </View>
        <View className="w-full flex-1">
          <TextInput
            className="h-12 w-full rounded-t-md bg-gray-800 font-body"
            onChangeText={(text) => setHeight(Number(text))}
            value={String(height)}
            keyboardType={"number-pad"}
            label="Altura (cm)"
            underlineColor="#f472b6"
            activeUnderlineColor="#f472b6"
            textColor="#f9fafb"
          />
        </View>
      </View>

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <FontAwesome5 name="weight" size={24} color="#f9fafb" />
        </View>
        <View className="w-full flex-1">
          <TextInput
            className="h-12 w-full rounded-t-md bg-gray-800 font-body"
            onChangeText={(text) => setWeight(Number(text))}
            value={String(weight)}
            keyboardType={"number-pad"}
            label="Peso (kg)"
            underlineColor="#f472b6"
            activeUnderlineColor="#f472b6"
            textColor="#f9fafb"
          />
        </View>
      </View>

    </ScrollView>
  );
}
