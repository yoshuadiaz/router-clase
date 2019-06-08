import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./navbar.css"
const Navbar = props => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            exact
            activeClassName="is-active"
            activeStyle={{ borderBottom: "10px solid black" }}
            to="/"
            className="navbar-item"
          >
            Home
          </NavLink>

          <NavLink
            activeClassName="is-active"
            to="/about"
            className="navbar-item"
          >
            About
          </NavLink>

          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/biografia-sentida-sentimental-y-sobervia-yo-expuesto"
          >
            Biografía sentida
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/contact"
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
