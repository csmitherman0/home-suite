import "./App.css";

import { Provider } from "react-redux";
import { store, persistor } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";

import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <NavBar />
          <Outlet />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
