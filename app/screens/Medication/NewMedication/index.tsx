import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import Schedule from "./Schedule";
import Select from "./Select";

const options = {
  person: [
    {
      label: "Paula",
      value: 1,
    },
    {
      label: "Margarida",
      value: 2,
    },
  ],
  repeat: [
    {
      label: "1 vez ao dia | 24/24h",
      value: 1,
    },
    {
      label: "2 vezes ao dia | 12/12h",
      value: 2,
    },
    {
      label: "3 vezes ao dia | 8/8h",
      value: 3,
    },
    {
      label: "4 vezes ao dia | 6/6h",
      value: 4,
    },
    {
      label: "6 vezes ao dia | 4/4h",
      value: 6,
    },
  ],
};

export default function NewMedication() {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View className="mb-2 grid h-fit w-full grid-cols-1 gap-y-3 px-4 py-4">
      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <Ionicons name="person" size={24} color="#f9fafb" />
        </View>
        <View className="h-12 flex-1 rounded-md bg-gray-800">
          <Select options={options.person} />
        </View>
      </View>

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <MaterialCommunityIcons name="pill" size={24} color="#f9fafb" />
        </View>
        <View className="w-full flex-1">
          <TextInput
            className="h-12 w-full rounded-t-md bg-gray-800 font-body"
            onChangeText={setMedicineName}
            value={medicineName}
            placeholder="Insira o nome da medicação"
            underlineColor="#f472b6"
            activeUnderlineColor="#f472b6"
            textColor="#f9fafb"
          ></TextInput>
        </View>
      </View>

      <Schedule options={options.repeat} />

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <MaterialCommunityIcons name="text-long" size={24} color="#f9fafb" />
        </View>
        <View className="w-full flex-1">
          <TextInput
            className="h-12 w-full rounded-t-md bg-gray-800 font-body"
            onChangeText={setDescription}
            value={description}
            placeholder="Adicionar descrição"
            underlineColor="#f472b6"
            activeUnderlineColor="#f472b6"
            textColor="#f9fafb"
          ></TextInput>
        </View>
      </View>
    </View>
  );
}
