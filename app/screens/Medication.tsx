import { ScrollView } from 'react-native'
import { FabButton } from '../../components/FabButton'
import { MedicationCard } from '../../components/MedicationCard'

export default function Medication({ navigation }) {
  const handleAddMedication = () => {
    navigation.navigate('screens/NewMedication')
  }

  return (
    <>
      <ScrollView
        className="mx-4"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <MedicationCard />
        <MedicationCard />
      </ScrollView>
      <FabButton addButton={handleAddMedication} />
    </>
  )
}
