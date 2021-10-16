import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Nav from "./component/Nav";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Nav setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        {loggedIn ? <Dashboard /> : <Home />}
      </div>
    </div>
  );
};

export default App;
