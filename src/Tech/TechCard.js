import React from "react";
import img from "../images/android.png";
import web from "../images/web.png";
import cloud from "../images/cloud.png";
import ml from "../images/mi.png";

function TechCard(props) {
  return (
    <div className="row">
      <div
        className="col s12 m6 center"
        style={{ padding: "10px", fontFamily: "sans-serif" }}
      >
        <h5>{props.name}</h5>
        <p className="blue-text text-darken-4">{props.about}</p>
        <a
          href={props.codelabs_link}
          target="_blank"
          className="waves-effect waves-light btn blue darken-4 center"
        >
          Codelabs <i className="material-icons right">send</i>
        </a>
      </div>
      <div className="col s12 m6" style={{ padding: "20px" }}>
        <img src={web} alt="#" style={{ width: "100%", height: "50%" }} />
      </div>
    </div>
  );
}

export default TechCard;
