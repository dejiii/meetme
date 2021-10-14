import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./screens/Home";
// import Dashboard from "./screens/Dashboard";
import Nav from "./component/Nav";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Home />
        {/* <Dashboard /> */}
      </div>
    </div>
  );
};

export default App;
