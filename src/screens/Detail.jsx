import React from "react"
import axios from "axios"

class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: {},
      isLoading: false,
      hasError: false
    }
  }

  async componentWillMount() {
    try {
      this.setState({ isLoading: true })
      this.setState({ hasError: false })
      const id = this.props.match.params.id

      const character = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      )

      this.setState({ detail: character.data })
      this.setState({ isLoading: false })
    } catch (error) {
      this.setState({ hasError: true })
    }
  }

  render() {
    return (
      <div>
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

        {!this.state.isLoading && !this.state.hasError && (
          <div className="ficha content">
            <img src={this.state.detail.image} alt="" />
            <h1>{this.state.detail.name}</h1>
            <ul>
              <li>Especie: {this.state.detail.species}</li>
              <li>Género: {this.state.detail.gender}</li>
            </ul>
          </div>
        )}

        <pre>{JSON.stringify({ ...this.props, ...this.state }, null, 2)}</pre>
      </div>
    )
  }
}

export default Detail
