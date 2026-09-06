import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TomatoScreen from "../screens/TomatoScreen";
import PurpleScreen from "../screens/PurpleScreen";
import GoldScreen from "../screens/GoldScreen";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { Text } from "react-native";
import { ms, s } from "react-native-size-matters";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "#A7CCF6",

        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? ms(12) : ms(10),
                fontWeight: focused ? "600" : "500",
              }}
            >
              Tomato
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="home"
              color={color}
              size={focused ? s(20) : s(18)}
            />
          ),
        }}
        name="TomatoScreen"
        component={TomatoScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? ms(12) : ms(10),
                fontWeight: focused ? "600" : "500",
              }}
            >
              Purple
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="profile"
              size={focused ? s(20) : s(18)}
              color={color}
            />
          ),
        }}
        name="PurpleScreen"
        component={PurpleScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? ms(12) : ms(10),
                fontWeight: focused ? "600" : "500",
              }}
            >
              Gold
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name="settings"
              size={focused ? s(20) : s(18)}
              color={color}
            />
          ),
        }}
        name="GoldScreen"
        component={GoldScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
