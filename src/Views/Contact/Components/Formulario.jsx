import React from 'react'



function Formulario ({handleChange, handleSubmit, userData}) {

    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            maxLength="40"
            id="name"
            onChange={handleChange}
            value={userData.name}
          />

        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            required
            maxLength="60"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel" 
            className="form-control"
            required
            maxLength="12"
            id="phone"
            onChange={handleChange}
            value={userData.phone}
          />
        </div>
        <div className="mb-3">
        <label for="message" className="form-label">
            Message
          </label>
          <input
            type="text-area"
            className="form-control"
            required
            maxLength="500"
            id="message"
            onChange={handleChange}
            value={userData.message}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  
  export default Formulario;