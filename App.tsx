import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { ProductContextProvider } from "./src/contexts/ProductContext";

export default function App() {
  return (
    <ProductContextProvider>
      <Routes />
    </ProductContextProvider>
  );
}
