import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

interface Option {
  label: string;
  value: number | string;
}

interface Props {
  options: Option[];
  setValue?: React.Dispatch<React.SetStateAction<number | string>>;
}

export default function Select({ options, setValue }: Props): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <Picker
      selectedValue={selectedValue}
      style={{
        height: 48,
        color: "white",
      }}
      dropdownIconColor="white"
      onValueChange={(itemValue) => {
        setValue && setValue(itemValue);
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
