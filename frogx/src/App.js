import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="//:post_id" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;
