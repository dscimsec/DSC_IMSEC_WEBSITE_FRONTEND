import React from "react";

function EventCard(props) {
  return (
    <div className="col s12 m6">
      <div className="card ">
        <div
          className="card-content black-text"
          style={{ fontFamily: "sans-serif" }}
        >
          <p>{props.time}</p>
          <span className="card-title" style={{ fontWeight: "bold" }}>
            {props.name}
          </span>
          <p className="black-text text-darken-4">{props.location}</p>
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
  );
}

export default EventCard;
