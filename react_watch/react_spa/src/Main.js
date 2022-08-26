import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import Stuff from "./Stuff.js";
import Contact from "./Contact.js";
import FavoriteBooks from "./Favorite_books.js";
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Watches</h1>
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Brands</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route exact={true} path="/" element={<Home />}/>
                    <Route path="/stuff" element={<Stuff />}/>
                </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;