import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Medication from "./screens/Medication";
import Profile from "./screens/Profile";
import Progress from "./screens/Progress";
import Today from "./screens/Today";

const Tab = createMaterialBottomTabNavigator();

const navigationItems = [
  {
    component: Today,
    name: "Today",
    label: "Hoje",
    icon: "today" as const,
  },
  {
    component: Medication,
    name: "Medication",
    label: "Medicações",
    icon: "md-medkit" as const,
  },
  {
    component: Progress,
    name: "Progress",
    label: "Progreso",
    icon: "stats-chart" as const,
  },
  {
    component: Profile,
    name: "Profile",
    label: "Perfil",
    icon: "person" as const,
  },
];

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      activeColor="#f472b6"
      inactiveColor="#f9fafb"
      barStyle={{ backgroundColor: "#111827" }}
    >
      {navigationItems.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={item.icon}
                size={24}
                color={focused ? "#f472b6" : "#f9fafb"}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
