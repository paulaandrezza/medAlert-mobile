import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function MedicationCard() {
  const [isActive, setActive] = useState(true)
  const toggleSwitch = () => setActive(!isActive)

  const [isOpen, setOpen] = useState(false)
  const toggleArrow = () => setOpen(!isOpen)

  return (
    <View className="mb-2 h-fit w-full rounded-2xl bg-gray-800 px-6 py-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-1 gap-4">
          <Text className="font-body text-pink-400">Margarida</Text>
          <View>
            <Text className="font-body text-gray-50">Amoxilina</Text>
            <View>
              <Text className="font-body text-gray-50">2 comprimidos</Text>
            </View>
            <Text className="font-body text-gray-50">2 vezes ao dia</Text>
          </View>
        </View>
        <View className="h-full max-h-full items-center justify-between">
          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded-full bg-gray-700 p-1"
            onPress={toggleArrow}
          >
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color="#f9fafb"
            />
          </TouchableOpacity>
          <Switch
            trackColor={{ false: '#374151', true: '#f472b6' }}
            thumbColor={isActive ? '#f9a8d4' : '#64748b'}
            onValueChange={toggleSwitch}
            value={isActive}
          ></Switch>
        </View>
      </View>
      {isOpen && (
        <View>
          <View>
            <Text className="font-body text-gray-50">Horários</Text>
          </View>
        </View>
      )}
    </View>
  )
}
