import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import Home from './Home'
import NewMedication from './screens/Medication/NewMedication'
const Stack = createNativeStackNavigator()

export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
          headerTintColor: '#f9fafb',
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="screens/Medication/NewMedication/index"
          component={NewMedication}
          options={{
            title: 'Nova Medicação',
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  )
}
