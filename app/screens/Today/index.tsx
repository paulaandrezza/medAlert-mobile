import { ScrollView } from 'react-native'
import { ReminderCard } from '../../../components/ReminderCard'

export default function Today() {
  return (
    <ScrollView
      className="bg-gray-950 px-4"
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
    </ScrollView>
  )
}
