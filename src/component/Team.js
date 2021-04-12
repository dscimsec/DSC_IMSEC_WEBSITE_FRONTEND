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
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {});
      console.log(elems);
    });
    console.log(this.state.teamMember);
  }

  render() {
    return (
      <div className="carousel">
        {this.state.teamMember &&
          this.state.teamMember.map((mem) => (
            <a className="carousel-item" key={mem.email} href="#one">
              <TeamMember
                name={mem.name}
                designation={mem.designation}
                profiles={mem.profiles}
              />
            </a>
          ))}
        <a className="carousel-item" href="#one">
          <TeamMember
            name={this.state.teamMember[0].name}
            designation={this.state.teamMember[0].designation}
            profiles={this.state.teamMember[0].profiles}
          />
        </a>

        {/* //   <a className="carousel-item" href="#one!">
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
      //     <TeamMember />{" "}
      //   </a> */}
      </div>
    );
  }
}

export default Team;
