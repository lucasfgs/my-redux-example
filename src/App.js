import React from "react";
import Login from "./components/Login";
import { Provider } from "react-redux";

import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default App;
