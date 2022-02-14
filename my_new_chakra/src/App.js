import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";

import Navbar from "./components/navbar/Navbar";
import PassionSpinner from "./components/passionspinner/PassionSpinner";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/passions">
                        <PassionSpinner size={300} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
