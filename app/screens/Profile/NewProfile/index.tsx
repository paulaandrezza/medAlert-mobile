import { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { IconWrapper } from "../../../../components/IconWrapper";
import Select from "../../../../components/Select";
import TimePicker from "../../../../components/TimePicker";

const genderOptions = [
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
  const [name, setName] = useState<string>("")
  const [birth, setBirth] = useState<Date>();
  const [gender, setGender] = useState<string>(null)
  const [height, setHeight] = useState<number | string>("")
  const [weight, setWeight] = useState<number | string>("")

  return (
    <ScrollView className="mb-2 grid h-fit w-full grid-cols-1 px-4 py-4">
      <IconWrapper icon={"account"}>
        <TextInput
          className="h-12 w-full rounded-t-md bg-gray-800 font-body"
          onChangeText={setName}
          value={name}
          label="Nome"
          underlineColor="#f472b6"
          activeUnderlineColor="#f472b6"
          textColor="#f9fafb"
        />
      </IconWrapper>

      <IconWrapper icon={"calendar"}>
        <TimePicker setFirstTime={setBirth} mode={"date"} placeholder={"Selecione a data de nascimento"} />
      </IconWrapper>

      <IconWrapper icon={"gender-male-female"}>
        <Select options={genderOptions} setValue={setGender} />
      </IconWrapper>

      <IconWrapper icon={"human-male-height-variant"}>
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
      </IconWrapper>

      <IconWrapper icon={"weight"}>
        <TextInput
          className="h-12 w-full rounded-t-md bg-gray-800 font-body"
          onChangeText={(text) => setWeight(Number(text))}
          value={String(weight)}
          // TODO: arrumar bug de NaN se digitar , ou .
          keyboardType={"number-pad"}
          label="Peso (kg)"
          underlineColor="#f472b6"
          activeUnderlineColor="#f472b6"
          textColor="#f9fafb"
        />
      </IconWrapper>

    </ScrollView>
  );
}
