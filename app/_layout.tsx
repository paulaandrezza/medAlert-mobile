import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import Home from './Home';
import NewMedication from './screens/Medication/NewMedication';
import NewProfile from './screens/Profile/NewProfile';
const Stack = createNativeStackNavigator();

export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
      case 'Today':
        return 'Hoje';
      case 'Medication':
        return 'Medicações';
      case 'Progress':
        return 'Progresso';
      case 'Profile':
        return 'Perfil';
      default:
        return 'Home';
    }
  }

  return (
    <PaperProvider>
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
            name="Home"
            component={Home}
            options={({ route }) => ({
              title: getHeaderTitle(route),
            })}
          />
          <Stack.Screen
            name="screens/Medication/NewMedication/index"
            component={NewMedication}
            options={{
              title: 'Nova Medicação',
              headerRight: () => (
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                  Salvar
                </Button>
              ),
            }}
          />
          <Stack.Screen
            name="screens/Profile/NewProfile/index"
            component={NewProfile}
            options={{
              title: 'Novo Perfil',
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </PaperProvider>
  );
}
