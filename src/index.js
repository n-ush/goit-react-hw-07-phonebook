import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./styles.css";
import store from "./redux/store";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<h1>Loading...</h1>} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
