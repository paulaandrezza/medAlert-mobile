import { ScrollView } from 'react-native'
import { ReminderCard } from '../components/ReminderCard'

export default function App() {
  return (
    <ScrollView
      className="mx-4"
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
