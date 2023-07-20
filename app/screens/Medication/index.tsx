import { ScrollView } from "react-native";
import { FabButton } from "../../../components/FabButton";
import { MedicationCard } from "../../../components/MedicationCard";

export default function Medication({ navigation }) {
  const handleAddMedication = () => {
    navigation.navigate("screens/Medication/NewMedication/index");
  };

  return (
    <>
      <ScrollView
        className="bg-gray-950 px-4"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <MedicationCard />
        <MedicationCard />
      </ScrollView>
      <FabButton addButton={handleAddMedication} />
    </>
  );
}
