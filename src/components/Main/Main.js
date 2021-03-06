import img from "../../images/Dsclogoims1.png";
import { Component } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Team from "../Team/Team";
import Tech from "../Tech/Tech";
import Contact from "../Contact/Contact";
import Event from "../Event/Event";

import "./main.css";

import {
  processEventData,
  processTechData,
  processUserData,
} from "../../utiity/processData";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamMember: [],
      tech: [],
      events: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    const lead = processUserData(props.leadData.users);
    const coreTeamMembers = processUserData(props.coreTeamData.users);
    const techData = processTechData(props.techData.technologies);
    const team = lead.concat(coreTeamMembers);
    const events = processEventData(props.eventData.events);
    console.log(events);
    state.teamMember = team;
    state.tech = techData;
    state.events = events;
    return state;
  }
  close(){
    const M = window.M;
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    instances[0].isOpen = true;

  }
  open() {
    const M = window.M;
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    instances[0].isOpen = false;
    
  }

  render() {
    
    return (
      <>
        <nav className="black lighten">
          <div className="nav-wrapper container">
            <li className="brand-logo">
              <img 
                src={img}
                style={{ width: "250px", height: "45px",marginTop:"6px" }}
              />
            </li>
            <a
              href="/"
              className="sidenav-trigger "
              data-target="mobile-links"
              onClick={() => this.open()}
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#tech">Techonolgy</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#event">Event</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav black" id="mobile-links">
          <li>
            <a style={{ color: `white` }} onClick={() => this.close()} href="#home">
              Home
            </a>
          </li>
          <li>
            <a style={{ color: `white` }} onClick={() => this.close()} href="#team">
              Team
            </a>
          </li>
          <li>
            <a style={{ color: `white` }} onClick={() => this.close()} href="#tech">
              Techonolgy
            </a>
          </li>
          <li>
            <a style={{ color: `white` }} onClick={() => this.close()} href="#about">
              About
            </a>
          </li>
          <li>
            <a style={{ color: `white` }} onClick={() => this.close()} href="#about">
              Event
            </a>
          </li>
          <li>
            <a style={{ color: `white` }} onClick={() => this.close()} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <section id="home" style={{ padding: "15px" }}>
            <Home />
          </section>
          <section id="about" style={{ padding: "15px" }}>
            <About />
          </section>
          <section id="team" style={{ padding: "15px" }}>
            <Team team={this.state.teamMember} />
          </section>
          <section id="tech" style={{ padding: "15px" }}>
            <Tech techData={this.state.tech} />
          </section>
          <section id="event" style={{ padding: "15px" }}>
            <Event events={this.state.events} />
          </section>
          <section id="contact" style={{ padding: "15px" }}>
            <Contact />
          </section>
        </div>
      </>
    );
  }
}

export default MainPage;
