import { View, Text, StyleSheet } from "react-native";

const Account = () => {
  return (
    <View style={styles.container}>
      <Text> Account </Text>
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

export default Account;
