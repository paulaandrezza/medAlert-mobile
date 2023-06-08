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
    { route: Today, name: 'screens/Today', label: 'Hoje', icon: 'today' },
    {
      route: Medication,
      name: 'screens/Medication',
      label: 'Medicações',
      icon: 'md-medkit',
    },
    {
      route: Progress,
      name: 'screens/Progress',
      label: 'Progreso',
      icon: 'stats-chart',
    },
    {
      route: Profile,
      name: 'screens/Profile',
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
          headerTintColor: '#f9fafb',
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'fade',
        }}
      >
        <Stack.Screen
          name={navigationItems[activeItem].name}
          component={navigationItems[activeItem].route}
          options={{ title: navigationItems[activeItem].label }}
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
