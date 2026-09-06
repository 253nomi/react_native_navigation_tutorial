import { View, Text, StyleSheet, Button } from "react-native";
import { ms } from "react-native-size-matters";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/MainStackNavigator";
import type { RouteProp } from "@react-navigation/native";

const GoldScreen = () => {
  type GoldScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "GoldScreen"
  >;

  type GoldScreenRouteProp = RouteProp<RootStackParamList, "GoldScreen">;

  const navigation = useNavigation<GoldScreenNavigationProp>();

  const { name, params } = useRoute<GoldScreenRouteProp>();

  console.log(name);
  console.log(params);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
      <Button
        title="Go To Purple Screen"
        onPress={() => navigation.navigate("PurpleScreen")}
      />
      <Text style={styles.text}>Hello {params.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: ms(30),
  },
});

export default GoldScreen;
