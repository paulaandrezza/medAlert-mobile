import { View } from 'react-native'

import { FabButton } from '../components/FabButton'
import { ReminderCard } from '../components/ReminderCard'

export default function App() {
  return (
    <View className="mx-4 flex-1">
      <ReminderCard />
      <FabButton />
    </View>
  )
}
