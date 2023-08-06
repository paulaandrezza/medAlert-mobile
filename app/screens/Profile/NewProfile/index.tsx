import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { IconWrapper } from "../../../../components/IconWrapper";
import Select from "../../../../components/Select";
import TimePicker from "../../../../components/TimePicker";
import { api } from "../../../../src/api/api";

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

  const handleSaveProfile = async () => {
    const profileData = {
      name,
      dateOfBirth: birth?.toISOString() || null,
      gender,
      height: height ? Number(height) : null,
      weight: weight ? Number(weight) : null,
    };

    try {
      const response = await api.post("/person", profileData);
      const data = await response.data;
      console.log("Profile saved:", data);
    } catch (error) {
      console.error("Error saving profile:", error.message);
    }
  };

  return (
    <View className="mb-2 h-fit w-full px-4 py-4 flex-1 flex flex-col justify-between">
      <View>
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
      </View>

      <Button mode="contained" onPress={handleSaveProfile}>SALVAR</Button>
    
    </View>
  );
}
