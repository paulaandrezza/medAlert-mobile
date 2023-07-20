import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

export function ReminderCard() {
  const [isTaken, setTaken] = useState(false);
  const toggleSwitch = () => setTaken(!isTaken);

  return (
    <View className="mb-2 h-fit w-full flex-row items-center justify-between rounded-2xl bg-gray-800 px-6 py-4">
      <View className="flex-1 gap-4">
        <Text className="font-body text-pink-400">Paula</Text>
        <Text className="font-title text-5xl text-gray-50">10:00</Text>
        <View>
          <Text className="font-body text-gray-50">Amoxilina</Text>
          <Text className="font-body text-gray-50">2 comprimidos</Text>
        </View>
      </View>
      <View className="h-full max-h-full items-center justify-between">
        <Switch
          trackColor={{ false: "#374151", true: "#f472b6" }}
          thumbColor={isTaken ? "#f9a8d4" : "#64748b"}
          onValueChange={toggleSwitch}
          value={isTaken}
        ></Switch>
        <View className="rounded-full bg-gray-700 p-2">
          <MaterialCommunityIcons name="pill" size={20} color="#f9fafb" />
        </View>
      </View>
    </View>
  );
}
