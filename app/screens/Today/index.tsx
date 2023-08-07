import { ScrollView, Text, View } from 'react-native';
import TimeSection from './TimeSection';

export default function Today() {
  return (
    <ScrollView
      className="bg-gray-950 px-4"
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-row mb-4">
        <Text className="font-body text-gray-100 w-20 px-3 text-right">
          Horários
        </Text>
        <Text className="font-body text-gray-100 px-3 flex-1">Medicações</Text>
      </View>

      <TimeSection currentTime />
      <TimeSection />
      <TimeSection />
    </ScrollView>
  );
}
