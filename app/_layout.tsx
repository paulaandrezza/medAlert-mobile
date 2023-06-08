import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { BottomNavigation } from '../components/BottomNavigation'
import { Header } from '../components/Header'

export default function Layout() {
  const [activeItem, setActiveItem] = useState(0)
  const handleNavigationChange = (itemIndex) => {
    setActiveItem(itemIndex)
  }

  const navigationItems = [
    { label: 'Hoje', icon: 'today' },
    { label: 'Progreso', icon: 'stats-chart' },
    { label: 'Perfil', icon: 'person-outline' },
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
      <StatusBar style="light" translucent />
      <Header label={navigationItems[activeItem].label} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
      <BottomNavigation
        items={navigationItems}
        activeItem={activeItem}
        onChange={handleNavigationChange}
      />
    </SafeAreaView>
  )
}
