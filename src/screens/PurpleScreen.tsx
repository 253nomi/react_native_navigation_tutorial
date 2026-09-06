import { View, Text, StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";

const PurpleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Purple Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: ms(30),
  },
});

export default PurpleScreen;
