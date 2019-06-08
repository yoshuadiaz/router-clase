import React from "react"
import axios from "axios"
import Character from "../components/Character"
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      isLoading: false,
      hasError: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true })
      this.setState({ hasError: false })
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      )

      const characters = data.results
      this.setState({ characters })
      this.setState({ isLoading: false })
    } catch (error) {
      this.setState({ hasError: true })
      // throw new Error("No se pudo manito :(")
    }
  }
  render() {
    return (
      <div>
        <h1>Hola a todos</h1>

        {this.state.isLoading && !this.state.hasError && (
          <div className="message">
            <div className="message-body">Cargando...</div>
          </div>
        )}

        {this.state.hasError && (
          <div className="message is-danger">
            <div className="message-body">No se pudo cargar :(</div>
          </div>
        )}

        {!this.state.isLoading &&
          !this.state.hasError &&
          this.state.characters.map(char => <Character data={char} />)}
      </div>
    )
  }
}

export default Home
