import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { IconWrapper } from "../../../../../components/IconWrapper";
import Select from "../../../../../components/Select";
import TimePicker from "../../../../../components/TimePicker";
import { formatTime, getSchedule } from "../../../../../src/utils/schedule";

export default function Schedule({ options }) {
  const [firstTime, setFirstTime] = useState<Date>();
  const [times, setTimes] = useState([]);
  const [repeat, setRepeat] = useState(1);

  useEffect(() => {
    setTimes([]);
    setTimes(getSchedule(firstTime, repeat))
  }, [repeat, firstTime]);

  return (
    <View className="grid h-fit w-full grid-cols-1 gap-y-3">
      <View className="w-full flex-row items-center gap-x-4">
        <View className="w-6">
          <FontAwesome name="bell-o" size={24} color="#f9fafb" />
        </View>
        <View className="flex h-12 justify-center">
          <Text className="font-body text-gray-50">Horários</Text>
        </View>
      </View>

      <View className="pl-10">
        <TimePicker setFirstTime={setFirstTime} mode={"time"} placeholder={"Selecione um horário"} />
      </View>

      {times.slice(1).map((time) => (
        <View key={time} className="flex-row items-center gap-x-4 pl-10">
          <View className="items-left h-12 w-full flex-1 justify-center rounded-md bg-gray-900 px-4 text-gray-50">
            <Text className="font-body text-gray-50">{formatTime(time)}</Text>
          </View>
        </View>
      ))}

      <View>
        <IconWrapper icon={"repeat"}>
          <Select options={options} setValue={setRepeat} />
        </IconWrapper>
      </View>

    </View>
  );
}
