import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./styles/Context/ProductContext";
import { FilterContextProvider } from "./styles/Context/FilterContext";
import { CartContextProvider } from "./styles/Context/CartContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <App/>
      </CartContextProvider>
    </FilterContextProvider>
  </AppProvider>
);
