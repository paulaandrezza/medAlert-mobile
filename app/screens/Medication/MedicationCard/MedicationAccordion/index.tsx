import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { formatTime, getSchedule } from '../../../../../src/utils/schedule';
import { Accordion } from '../Accordion';

export function MedicationAccordion({ medication }) {
  const [isOpen, setIsOpen] = useState(false);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    setTimes(
      getSchedule(new Date(medication.firstSchedule), medication.frequency)
    );
  }, [isOpen]);

  const hasPlural =
    medication.medicationType.hasPlural && medication.dosage > 1 ? 's' : '';
  const textDosage =
    medication.dosage + ' ' + medication.medicationType.type + hasPlural;

  return (
    <View className="-mx-4">
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen} actionButtons>
        <View className="w-6">
          <MaterialCommunityIcons name="pill" size={24} color="#f9fafb" />
        </View>
        <View>
          <Text className="font-body text-gray-50">
            {medication.name.substring(0, 20) +
              (medication.name.length > 20 ? '...' : '')}
          </Text>
        </View>
      </Accordion>

      {isOpen && (
        <View className="mx-4 flex-column gap-y-2 mb-3">
          <Chip>{textDosage}</Chip>
          <Chip>
            {medication.frequency} vez
            {medication.frequency > 1 ? 'es' : ''} ao dia
          </Chip>
          <View className="gap-x-2 flex-row flex-wrap">
            {times.map((time, index) => (
              <Chip key={index}>{formatTime(time)}</Chip>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
