import { Button, StyleSheet, Text, View } from "react-native";
import { ProductStackProps } from "../types/navigation";
import { Product as ProductType } from "../types/product";

const Product = ({ navigation }: ProductStackProps) => {
  const productItem: ProductType = {
    id: "a1b2c3d4",
    name: "Notebook",
    description: "MacBook i9 16gb",
    cost: 12000.5,
  };

  const goDetails = () => {
    navigation.navigate("Details", productItem);
  };

  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <Button title="Detalhes" onPress={goDetails} />
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

export default Product;
