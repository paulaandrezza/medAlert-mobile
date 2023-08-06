import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { Accordion } from '../Accordion';

export function MedicationAccordion({ medication }) {
  console.log(medication);

  const [isOpen, setIsOpen] = useState(false);
  const hasPlural =
    medication.medicationType.hasPlural && medication.dosage > 1 ? 's' : '';
  const textDosage =
    medication.dosage + ' ' + medication.medicationType.type + hasPlural;

  return (
    <View className="-mx-4">
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen}>
        <View className="w-6">
          <MaterialCommunityIcons name="pill" size={24} color="#f9fafb" />
        </View>
        <View>
          <Text className="font-body text-gray-50">{medication.name}</Text>
        </View>
      </Accordion>

      {isOpen && (
        <View className="mx-4 flex-column gap-y-3 mb-3">
          <Text className="font-body text-gray-50">{textDosage}</Text>
          <View>
            <Chip icon="clock-outline" onPress={() => console.log('Pressed')}>
              Example Chip
            </Chip>
          </View>
        </View>
      )}
    </View>
  );
}
