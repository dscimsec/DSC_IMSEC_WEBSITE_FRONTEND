import "./about.css";

const About = () => {
  return (
    <div className="center">
      <div className="row" id="grid">
        <div className="col s12 m4 center" id="grid1">
          <b>Concept of DSC</b> <br />
          <div className="card-panel blue lighten-4 z-depth-3">
            <span className="material-icons">home_max</span>
            <br />
            <span className="black-text">
              The DSC program is a grassroots channel through which Google
              provides development skills, mobile and web development skills for
              students.
            </span>
          </div>
        </div>
        <div className="col s12 m4 center" id="grid2">
          <b>Why DSC?</b> <br />
          <div className="card-panel center green lighten-4 z-depth-3">
            <span className="material-icons">favorite_border</span>
            <br />
            <span className="black-text">
              For students to learn development skills, solve problems through
              technology and inspire them to be world class developers and
              changemakers.
            </span>
          </div>
        </div>
        <div className="col s12 m4 center " id="grid3">
          <b>Target Audience</b> <br />
          <div className="card-panel center red lighten-4 z-depth-3">
            <span className="material-icons">people_outline</span>
            <br />
            <span className="black-text ">
              {" "}
              DSC activities are targeted at University students and any others
              including faculty members who want to learn development skills &
              work to solve real-life problems.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
