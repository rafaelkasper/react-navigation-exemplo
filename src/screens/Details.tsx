import { Text, View, StyleSheet, Button } from "react-native";
import { DetailsStackProps } from "../types/navigation";
import { Product } from "../types/product";
import { useRoute } from "@react-navigation/native";

const Details = ({ navigation }: DetailsStackProps) => {
  const route = useRoute();
  const { name, description, cost } = route.params as Product;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Details</Text>
        <Text style={styles.description}>Nome: {name}</Text>
        <Text style={styles.description}>Descrição: {description}</Text>
        <Text style={styles.description}>Valor: {cost}</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderWidth: 3,
    padding: 20,
    width: "90%",
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 18,
  },
});

export default Details;
