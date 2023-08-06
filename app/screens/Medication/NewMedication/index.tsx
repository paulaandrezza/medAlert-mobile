import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import DialogCard from '../../../../components/DialogCard';
import { IconWrapper } from '../../../../components/IconWrapper';
import Select from '../../../../components/Select';
import { api } from '../../../../src/api/api';
import Schedule from './Schedule';

const repeat = [
  {
    label: '1 vez ao dia | 24/24h',
    value: 1,
  },
  {
    label: '2 vezes ao dia | 12/12h',
    value: 2,
  },
  {
    label: '3 vezes ao dia | 8/8h',
    value: 3,
  },
  {
    label: '4 vezes ao dia | 6/6h',
    value: 4,
  },
  {
    label: '6 vezes ao dia | 4/4h',
    value: 6,
  },
];

export default function NewMedication() {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [people, setPeople] = useState([]);
  const [medicationTypes, setMedicationTypes] = useState([]);

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const response = await api.get('/person');
        const formattedPeople = response.data.map((person) => ({
          label: person.name,
          value: person.id,
        }));
        setPeople(formattedPeople);
      } catch (error) {
        console.error('Erro ao carregar pessoas:', error.message);
      }
    };

    const loadMedicationTypes = async () => {
      try {
        const response = await api.get('/medicationType');
        const formattedMedicationType = response.data.map((medication) => ({
          label: `${medication.type}${medication.hasPlural ? '(s)' : ''}`,
          value: medication.id,
        }));
        setMedicationTypes(formattedMedicationType);
      } catch (error) {
        console.error('Erro ao carregar medication types:', error.message);
      }
    };

    loadPeople();
    loadMedicationTypes();
  }, []);

  return (
    <ScrollView className="mb-2 flex-1 flex-col h-fit w-full px-4 py-4">
      <IconWrapper icon={'account'}>
        <Select options={people} />
      </IconWrapper>

      <View className="flex-row items-center gap-x-4 mb-3">
        <View className="w-6">
          <MaterialCommunityIcons name="pill" size={24} color="#f9fafb" />
        </View>
        <View className="w-full flex-1">
          <TextInput
            className="h-12 w-full rounded-t-md bg-gray-800 font-body"
            onChangeText={setMedicineName}
            value={medicineName}
            label="Insira o nome da medicação"
            underlineColor="#f472b6"
            activeUnderlineColor="#f472b6"
            textColor="#f9fafb"
          ></TextInput>
        </View>
      </View>

      <IconWrapper>
        <DialogCard />
      </IconWrapper>

      <IconWrapper>
        <Select options={medicationTypes} />
      </IconWrapper>

      <Schedule options={repeat} />

      <IconWrapper icon={'text-long'}>
        <TextInput
          className="h-12 w-full rounded-t-md bg-gray-800 font-body"
          onChangeText={setDescription}
          value={description}
          label="Adicionar descrição"
          underlineColor="#f472b6"
          activeUnderlineColor="#f472b6"
          textColor="#f9fafb"
        ></TextInput>
      </IconWrapper>
    </ScrollView>
  );
}
