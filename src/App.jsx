import React from "react";
import { GlobalProvider } from "./contexts/GlobalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <GlobalProvider>
      <Homepage />
    </GlobalProvider>
  );
};

export default App;
