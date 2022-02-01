import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";

import Navbar from "./components/navbar/Navbar";
import PassionSpinner from "./components/passionspinner/PassionSpinner";
import Colorprovide from "./components/colorprovide/Colorprovide";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/passions">
            <PassionSpinner size={300} />
          </Route>
          <Route path="/color" component={Colorprovide} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
