import React from "react"

const Contact = props => {
  return (
    <div className="content">
      <h1>Contacto</h1>
      <form action="">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Pon aquí tu nombre"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Correo</label>
          <div className="control">
            <input
              type="email"
              className="input"
              name="name"
              placeholder="tu correo de contacto"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Correo</label>
          <div className="control">
            <textarea
              class="textarea"
              placeholder="¿En que puedo ayudarte?"
              name="message"
            />
          </div>
        </div>

        <button className="button is-info">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
