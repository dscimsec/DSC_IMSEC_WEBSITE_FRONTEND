import React, { useEffect, useState } from "react";
import TeamMember from "./TeamMember";
import useFetch from "../api/useFetch";

function Team() {
  const { data: teamMembers, isPending, err } = useFetch(
    "http://localhost:8000/users/CORE"
  );

  const carsouselRef = React.createRef();

  useEffect(() => {
    console.log("ana");
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
    //   elems.push(carsouselRef);
        var el = [carsouselRef];
        // var z = NodeList(el);
      var instances = M.Carousel.init(el, {});
      console.log(el);
    });
  }, []);

  const profiles = {
    github: "abacd",
    facebook: "qpo",
  };

  return (
    <div className="caraousel" ref={carsouselRef}>
      <a className="carousel-item" href="#one!">
        <TeamMember />
      </a>
      <a className="carousel-item" href="#two!">
        <TeamMember />
      </a>
      <a className="carousel-item" href="#three!">
        <TeamMember />
      </a>
      <a className="carousel-item" href="#four!">
        <TeamMember />
      </a>
      <a className="carousel-item" href="#five!">
        <TeamMember />
      </a>
    </div>
  );
}

export default Team;
