import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View } from 'react-native'
import { BottomNavigation } from '../components/BottomNavigation'

export default function Layout() {
  const [activeItem, setActiveItem] = useState(0)
  const handleNavigationChange = (itemIndex) => {
    setActiveItem(itemIndex)
  }

  const navigationItems = [
    { label: 'Hoje', icon: 'calendar-check-o' },
    { label: 'About', icon: 'calendar-check-o' },
    { label: 'Contact', icon: 'calendar-check-o' },
  ]

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="relative flex-1 bg-gray-950 pt-16">
      <StatusBar style="light" translucent />

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
    </View>
  )
}
