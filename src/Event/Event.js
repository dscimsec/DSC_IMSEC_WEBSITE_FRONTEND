import { Component } from "react";

class Event extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, {});
    });
  }
  render() {
    const object = this.props.object[0];
    return (
      <section>
        <section className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card ">
                <div
                  className="card-content black-text"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <p>{object.time}</p>
                  <span className="card-title" style={{ fontWeight: "bold" }}>
                    {object.name}
                  </span>
                  <p className="black-text text-darken-4">{object.location}</p>
                  <br />
                  <a
                    className="waves-effect waves-light btn modal-trigger blue darken-4"
                    href="#modal1"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="modal1" className="modal" style={{ fontFamily: "sans-serif" }}>
          <div className="modal-content">
            <div className="row">
              <div className="col s6 m6">
                <h4>{object.name}</h4>
              </div>
              <div className="col s6 m6">
                <a
                  href={object.link}
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
                    src={object.banner}
                    alt="#"
                    style={{ height: "50%", width: "100%" }}
                  />
                </div>
              </div>
              <p className="grey-text">{object.location}</p>
              <p className="grey-text">{object.time}</p>
              <p style={{ fontWeight: "bold" }}>Description</p>
              <p className="grey-text">{object.overview}</p>
            </div>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default Event;
