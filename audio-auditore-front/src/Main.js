import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//importamos el componente, deben comenzar con mayusculas
import NavBar from "./components/NavBar";
import Register from "./components/Register"

import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";

class Main extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <Register />
                </div>
                
                <HashRouter>
                    <div>
                        <h1>Simple SPA</h1>
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/stuff" component={Stuff} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Main;