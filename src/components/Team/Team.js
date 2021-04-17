import { Component } from "react";
import TeamMember from "./TeamMember";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMember: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    state.teamMember = props.team;
    return state;
  }
  componentDidMount() {
    const M = window.M;
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {});
    console.log(elems);
    console.log("component did mount");
  }

  render() {
    return (
      <>
        <section className="center">
          <h4>
            <span className="blue-text text-darken-4">Our</span> Team
          </h4>
          <p className="grey-text">Team is everthing. We are Family</p>
        </section>

        <div className="carousel">
          {this.state.teamMember &&
            this.state.teamMember.map((mem) => (
              <a className="carousel-item" key={mem.email} href="#">
                <TeamMember
                  name={mem.name}
                  designation={mem.designation}
                  profiles={mem.profiles}
                  profile_pic={`${process.env.REACT_APP_BACKEND_URL}/${mem.profile_pic}`}
                />
              </a>
            ))}
        </div>
      </>
    );
  }
}

export default Team;

{
}

// <div className="carousel">
//   <a className="carousel-item" href="#one!">
//     <TeamMember />
//   </a>
//   <a className="carousel-item" href="#two!">
//     <TeamMember />
//   </a>
//   <a className="carousel-item" href="#three!">
//     <TeamMember />{" "}
//   </a>
//   <a className="carousel-item" href="#four!">
//     <TeamMember />
//   </a>
//   <a className="carousel-item" href="#five!">
//     <TeamMember />
//   </a>
// </div>
