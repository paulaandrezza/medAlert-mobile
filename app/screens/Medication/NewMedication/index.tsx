import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import TimePicker from './TimePicker'

export default function NewMedication() {
  const [selectedValue, setSelectedValue] = useState('Selecione um perfil')
  const [text, onChangeText] = useState('')

  return (
    <View className="mb-2 grid h-fit w-full grid-cols-1 gap-y-3 px-4 py-4">
      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <Ionicons name="person" size={24} color="#f9fafb" />
        </View>
        <View className="flex-1 rounded-md bg-gray-800">
          <Picker
            selectedValue={selectedValue}
            style={{
              height: 48,
              color: 'white',
            }}
            dropdownIconColor="white"
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Renimar" value="renimar" />
            <Picker.Item label="Paulinha" value="paulinha" />
          </Picker>
        </View>
      </View>

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <MaterialCommunityIcons name="pill" size={24} color="#f9fafb" />
        </View>
        <View className="w-full flex-1">
          <TextInput
            className="h-12 w-full rounded-t-md bg-gray-800 font-body text-gray-50"
            onChangeText={onChangeText}
            value={text}
            placeholder="Insira o nome da medicação..."
            underlineColor="#f472b6"
            activeUnderlineColor="#f472b6"
          ></TextInput>
        </View>
      </View>

      <View className="w-full flex-row items-center gap-x-4">
        <View className="w-6">
          <FontAwesome name="bell-o" size={24} color="#f9fafb" />
        </View>
        <View className="flex h-12 justify-center">
          <Text className="font-body text-gray-50">Horários</Text>
        </View>
      </View>
      <TimePicker />

      <View className="flex-row items-center gap-x-4">
        <View className="w-6">
          <FontAwesome name="repeat" size={24} color="#f9fafb" />
        </View>
        <TouchableOpacity
          className="items-left h-12 w-full flex-1 justify-center rounded-md bg-gray-800 px-4 text-gray-50"
          activeOpacity={0.7}
          onPress={() => {
            setShow(true)
          }}
        >
          <Text className="font-body text-gray-50">Não repete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
