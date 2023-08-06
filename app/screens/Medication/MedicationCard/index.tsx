import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Accordion } from './Accordion';
import { MedicationAccordion } from './MedicationAccordion';

export function MedicationCard({ personInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="mb-2 h-fit w-full flex flex-col rounded-md bg-gray-800">
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen}>
        <View className="w-6">
          <Ionicons name="person" size={24} color="#f9fafb" />
        </View>
        <Text className="font-body text-gray-50">{personInfo.name}</Text>
      </Accordion>

      {isOpen && (
        <View className="bg-gray-900 rounded-b-md px-4 py-4 min-h-[48]">
          {personInfo.Medication.map((medication) => (
            <MedicationAccordion
              key={medication.name}
              medication={medication}
            />
          ))}
        </View>
      )}
    </View>
  );
}
