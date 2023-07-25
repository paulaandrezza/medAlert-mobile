import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function TimePicker({ setFirstTime, mode, placeholder }) {
  const [time, setTime] = useState(new Date());
  const [text, setText] = useState(placeholder);
  const [show, setShow] = useState(false);

  const onChange = (event, value) => {
    const currentTime: Date = value || time;
    setShow(false);
    setTime(currentTime);
    setFirstTime(currentTime);

    let formatedText = ""

    if(mode === 'time') {
      formatedText = 
        String(currentTime.getHours()).padStart(2, "0") +
          ":" +
        String(currentTime.getMinutes()).padStart(2, "0");
    } else {
      formatedText =
        String(currentTime.getDay()).padStart(2, "0") +
          "/" +
        String(currentTime.getMonth()).padStart(2, "0") +
          "/" +
        String(currentTime.getFullYear());
    }
    setText(formatedText)
  };

  return (
    <View className="flex-row items-center">
      <TouchableOpacity
        className="items-left h-12 w-full justify-center rounded-md bg-gray-800 px-4 text-gray-50"
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
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}
