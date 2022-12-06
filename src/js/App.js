import React from "react";
import { AppUX } from "./AppUX";
import { TodoProvider } from "../js/TodoContext";


function App() {
  return (
    <TodoProvider>
        <AppUX />
    </TodoProvider>
  );
}

export default App;
