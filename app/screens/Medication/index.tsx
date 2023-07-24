import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { FabButton } from "../../../components/FabButton";
import { api } from "../../../src/api/api";
import { PersonInfoProps } from "../../../types";
import { MedicationCard } from "./MedicationCard";

export default function Medication({ navigation }) {
  const [peopleInfo, setPeopleInfo] = useState<PersonInfoProps[]>([])

  const handleAddMedication = () => {
    navigation.navigate("screens/Medication/NewMedication/index");
  };

  async function loadMedications() {
    try {
      const response = await api.get('/person/details');
      setPeopleInfo(response.data);
    } catch (error) {
      console.error('Erro ao carregar medicamentos:', error.message);
    }
  }

  useEffect(() => {
    loadMedications()
  }, [])

  return (
    <>
      <ScrollView
        className="bg-gray-950 px-4"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {peopleInfo.map((personInfo: PersonInfoProps) => (
          <MedicationCard key={personInfo.id} personInfo={personInfo}/>
        ))}
      </ScrollView>
      <FabButton addButton={handleAddMedication} />
    </>
  );
}
