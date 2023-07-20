import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { FabButton } from "../../../components/FabButton";
import { api } from "../../../src/api/api";
import { MedicationProps } from "../../../types";
import { MedicationCard } from "./MedicationCard";

export default function Medication({ navigation }) {
  const [medications, setMedications] = useState<MedicationProps[]>([])

  const handleAddMedication = () => {
    navigation.navigate("screens/Medication/NewMedication/index");
  };

  async function loadMedications() {
    try {
      const response = await api.get('/medication');
      setMedications(response.data);
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
        {medications.map(medication => (
          <MedicationCard key={medication.id} medication={medication}/>
        ))}
      </ScrollView>
      <FabButton addButton={handleAddMedication} />
    </>
  );
}
