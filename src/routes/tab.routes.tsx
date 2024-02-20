import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackRoutes } from "./stack.routes";
import { MaterialIcons } from "@expo/vector-icons";
import Configurations from "../screens/Configurations";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#0077b6",
        tabBarInactiveBackgroundColor: "#48cae4",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="#7209b7" />
          ),
        }}
      />
      <Tab.Screen
        name="Configurations"
        component={Configurations}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="settings" size={30} color="#7209b7" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
