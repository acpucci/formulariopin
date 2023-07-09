import React from 'react'

function Formulario(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            onChange={props.handleChange}
            value={props.newUser.name}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="e-mail"
            aria-describedby="emailHelp"
            onChange={props.handleChange}
            value={props.newUser.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Phone number"
            onChange={props.handleChange}
            value={props.newUser.phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            type="text-area"
            className="form-control"
            id="message"
            placeholder="Please leave your message"
            onChange={props.handleChange}
            value={props.newUser.message}
          />
        </div>
        <button disabled={props.disableSubmit} type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
      {props.success &&
        <div className="alert alert-success m-3" role="alert">
          Thank you! Your information has been received!
        </div>}
      {props.error &&
        <div className="alert alert-danger m-3" role="alert">
          {props.errorMessage}
        </div>}
    </>
  );
}

export default Formulario;