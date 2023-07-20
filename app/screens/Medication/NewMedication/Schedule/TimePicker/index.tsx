import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function TimePicker({ setFirstTime }) {
  const [time, setTime] = useState(new Date());
  const [text, setText] = useState("Selecione um horário");
  const [show, setShow] = useState(false);

  const onChange = (event, value) => {
    const currentTime = value || time;
    setShow(false);
    setTime(currentTime);
    setFirstTime(currentTime);

    setText(
      String(currentTime.getHours()).padStart(2, "0") +
        ":" +
        String(currentTime.getMinutes()).padStart(2, "0")
    );
  };

  return (
    <View className="flex-row items-center gap-x-4 pl-10">
      <TouchableOpacity
        className="items-left h-12 w-full flex-1 justify-center rounded-md bg-gray-800 px-4 text-gray-50"
        activeOpacity={0.7}
        onPress={() => {
          setShow(true);
        }}
      >
        <Text className="font-body text-gray-50">{text}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode="time"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}
