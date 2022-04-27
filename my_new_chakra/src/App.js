import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";

import Navbar from "./components/navbar/Navbar";
import PassionSpinner from "./components/passionspinner/PassionSpinner";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import DataSlice from "./components/dataslice/DataSlice";
import Light from "./components/lighton/Light";
import EDit from "./components/edit/EDit";
import Delete from "./components/delete/Delete";
import Viewpage from "./components/viewpage/Viewpage";
import HomePageDatas from "./components/Homepagedatas/HomePageDatas";
import Listadats from "./components/Homepagedatas/listdatas/Listadats";

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
                    <Route path="/datas" component={DataSlice} />
                    <Route path="/light" component={Light} />
                    <Route path="/edit" component={EDit} />
                    <Route path="/delete" component={Delete} />
                    <Route path="/view" component={Viewpage} />
                    <Route path="/overalldatas" component={HomePageDatas} />
                    <Route path="/lists" component={Listadats}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
