import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import TomatoScreen from "../screens/TomatoScreen";
import GoldScreen from "../screens/GoldScreen";
import PurpleScreen from "../screens/PurpleScreen";

export type RootStackParamList = {
  GoldScreen: {
    name: string;
  };
  TomatoScreen: undefined;
  PurpleScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TomatoScreen"
    >
      <Stack.Screen name="GoldScreen" component={GoldScreen} />
      <Stack.Screen name="TomatoScreen" component={TomatoScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Purple",
        }}
        name="PurpleScreen"
        component={PurpleScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
