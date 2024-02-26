import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Cart;
