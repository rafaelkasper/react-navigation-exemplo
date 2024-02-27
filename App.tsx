import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { ProductContextProvider } from "./src/contexts/ProductContext";
import { ThemeContextProvider } from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <ProductContextProvider>
        <Routes />
      </ProductContextProvider>
    </ThemeContextProvider>
  );
}
