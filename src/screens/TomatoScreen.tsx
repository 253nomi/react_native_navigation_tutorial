import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import { ms } from "react-native-size-matters";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/MainStackNavigator";

const TomatoScreen = () => {
  type TomatoScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "TomatoScreen"
  >;

  const navigation = useNavigation<TomatoScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tomato Screen</Text>
      <Button
        title="Go To Gold Screen"
        onPress={() => navigation.navigate("GoldScreen", { name: "Nooman" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: ms(30),
  },
});

export default TomatoScreen;
