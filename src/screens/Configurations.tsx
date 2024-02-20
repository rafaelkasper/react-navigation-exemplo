import { View, Text, StyleSheet } from "react-native";

const Configurations = () => {
  return (
    <View style={styles.container}>
      <Text>Configurations</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Configurations;
