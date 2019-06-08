import React from "react"
import axios from "axios"
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      )

      const characters = data.results
      this.setState({ characters })

      console.log(this.state)
    } catch (error) {
      throw new Error("No se pudo manito :(")
    }
  }
  render() {
    return (
      <div>
        <h1>Hola a todos</h1>
      </div>
    )
  }
}

export default Home
