import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Switch as Thanos,
  Redirect
} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./screens/Home"
import About from "./screens/About"
import Bio from "./screens/Bio"
import Contact from "./screens/Contact"
import Detail from "./screens/Detail"

// Tip: creative-tim.com

ReactDOM.render(
  <Router>
    <Navbar />
    <Thanos>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/biografia-sentida-sentimental-y-sobervia-yo-expuesto"
        component={Bio}
      />
      <Redirect
        from="/bio"
        to="/biografia-sentida-sentimental-y-sobervia-yo-expuesto"
      />
      <Route path="/contact" component={Contact} />
      <Route path="/detail/:id" component={Detail} />
      <Route>
        <div className="content has-text-centered">
          <h1>404</h1>
          <p>No se encontró</p>
        </div>
      </Route>
    </Thanos>
  </Router>,

  document.getElementById("bulmatron")
)
