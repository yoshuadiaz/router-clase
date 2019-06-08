import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"

const Home = props => {
  return (
    <div className="content">
      <h1>Hola a todos, es el home</h1>
    </div>
  )
}

const About = props => {
  return (
    <div>
      <h1>Acerca de</h1>
      <p>
        Nuestra misión es Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam optio repellat nobis cupiditate eligendi, culpa sit
        explicabo cumque quis voluptatem laboriosam, excepturi facere ad libero
        amet harum? Qui, cum laborum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore
        illum accusamus fugit dolore ad modi qui, deleniti sequi in consequatur
        ducimus molestias sed omnis quo dolor accusantium. Vitae, veniam.
      </p>
      <p>
        Reprehenderit minus recusandae ullam molestiae a reiciendis cum. Ipsa
        laboriosam facere nobis ea porro et suscipit. Sed voluptas numquam
        doloribus nulla autem id. Repudiandae iusto quasi laudantium est! Sit,
        voluptate.
      </p>
      <p>
        Voluptate optio quibusdam dolorum, qui accusamus soluta laborum officia
        laudantium voluptates dolor est quas voluptatum maxime doloribus
        nesciunt in harum ullam sed quae ab eligendi. Hic aut sint quod quia.
      </p>
      <p id="olakease">
        Quasi perferendis obcaecati eveniet, quas, incidunt aliquid deserunt ut
        enim nostrum libero cupiditate, quam quibusdam ad necessitatibus?
        Consequuntur optio voluptates sit, dicta sapiente doloremque ratione
        aliquid vitae, minus, earum rerum.
      </p>
      <p>
        Ipsa quos vitae debitis ut ipsum culpa quia. Libero beatae in
        doloremque, illum ratione ducimus pariatur commodi nobis amet velit
        provident impedit eos incidunt? Praesentium porro architecto nostrum
        ducimus illum.
      </p>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route>
        <div className="content has-text-centered">
          <h1>404</h1>
          <p>No se encontró</p>
        </div>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("bulmatron")
)
