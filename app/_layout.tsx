import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { BottomNavigation } from '../components/BottomNavigation'

import Medication from './screens/Medication'
import NewMedication from './screens/Medication/NewMedication'
import Profile from './screens/Profile'
import Progress from './screens/Progress'
import Today from './screens/Today'

const Stack = createNativeStackNavigator()

export default function Layout() {
  const [activeItem, setActiveItem] = useState(0)
  const handleNavigationChange = (itemIndex) => {
    setActiveItem(itemIndex)
  }

  const navigationItems = [
    {
      component: Today,
      name: 'screens/Today/index',
      label: 'Hoje',
      icon: 'today',
    },
    {
      component: Medication,
      name: 'screens/Medication/index',
      label: 'Medicações',
      icon: 'md-medkit',
    },
    {
      component: Progress,
      name: 'screens/Progress/index',
      label: 'Progreso',
      icon: 'stats-chart',
    },
    {
      component: Profile,
      name: 'screens/Profile/index',
      label: 'Perfil',
      icon: 'person-outline',
    },
  ]

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
        <Stack.Screen
          name={navigationItems[activeItem].name}
          component={navigationItems[activeItem].component}
          options={{ title: navigationItems[activeItem].label }}
        />
        <Stack.Screen
          name="screens/Medication/NewMedication/index"
          component={NewMedication}
          options={{ title: 'Nova Medicação' }}
        />
      </Stack.Navigator>

      <BottomNavigation
        items={navigationItems}
        activeItem={activeItem}
        onChange={handleNavigationChange}
      />
    </SafeAreaView>
  )
}
