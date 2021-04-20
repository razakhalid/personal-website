import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/personal-website">
            <Home />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
