import React from 'react'

function Modal(props) {
    return (
      <>
        <div className="modal-content">
          <div className="row">
            <div className="col s6 m6">
              <h4>{props.name}</h4>
            </div>
            <div className="col s6 m6">
              <a
                href={props.link}
                className="waves-effect waves-light btn right black"
              >
                <i className="material-icons ">send</i>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col s6 m6">
                <img
                  src={props.banner}
                  alt="#"
                  style={{ height: "50%", width: "100%" }}
                />
              </div>
            </div>
            <p className="grey-text">{props.location}</p>
            <p className="grey-text">{props.time}</p>
            <p style={{ fontWeight: "bold" }}>Description</p>
            <p className="grey-text">{props.overview}</p>
          </div>
        </div>
        <div className="modal-footer">
          <a className="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </>
    );
}

export default Modal
