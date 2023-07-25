import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

interface Option {
  label: string;
  value: number | string;
}

interface Props {
  options: Option[];
  setRepeat?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Select({ options, setRepeat }: Props): JSX.Element {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Picker
      selectedValue={selectedValue}
      style={{
        height: 48,
        color: "white",
      }}
      dropdownIconColor="white"
      onValueChange={(itemValue) => {
        setRepeat && setRepeat(Number(itemValue));
        setSelectedValue(itemValue);
      }}
    >
      {options.map((item) => (
        <Picker.Item
          style={{ fontSize: 14 }}
          key={item.label}
          label={item.label}
          value={item.value}
        />
      ))}
    </Picker>
  );
}
