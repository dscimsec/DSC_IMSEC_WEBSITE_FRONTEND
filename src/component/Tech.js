import img from "../image/android.png";
import web from "../image/web.png";
import cloud from "../image/cloud.png";
import ml from "../image/mi.png";

const Tech = () => {
  return (
    <div className="container">
      <div className="center">
        <h4 style={{ fontFamily: "sans-serif" }}>
          Technologies We're Excited About
        </h4>
        <p className="grey-text">
          Opportunities to learn & access deep technical content.
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div className="row">
          <div
            className="col s12 m6 center"
            style={{ padding: "10px", fontFamily: "sans-serif" }}
          >
            <h5>Web Development</h5>
            <p className="blue-text text-darken-4">
              Learn the core foundations of a delightful web experience both for
              the user and developer. Stay up to tabs with emerging and trending
              technologies. Get access to a guided, tutorial and hands-on coding
              experience.
            </p>
            <a
              href="https://developers.google.com/community/dsc"
              className="waves-effect waves-light btn blue darken-4 center"
            >
              Codelabs <i className="material-icons right">send</i>
            </a>
          </div>
          <div className="col s12 m6" style={{ padding: "20px" }}>
            <img src={web} alt="#" style={{ width: "100%", height: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6" style={{ padding: "20px" }}>
            <img src={cloud} alt="#" style={{ width: "100%", height: "50%" }} />
          </div>
          <div
            className="col s12 m6 center"
            style={{ fontFamily: "sans-serif", padding: "10px" }}
          >
            <h5>Cloud Development</h5>
            <p className="pink-text text-darken-4">
              For passionate developers who want to stay relevant in a cloud
              first world where businesses demand for agility and innovation and
              prompt rise of cloud-native applications to bridges gaps between
              data, insight, and action.
            </p>
            <a
              href="https://developers.google.com/community/dsc"
              className="waves-effect waves-light btn blue darken-4 center"
            >
              Codelabs <i className="material-icons right">send</i>
            </a>
          </div>
        </div>
        <div className="row">
          <div
            className="col s12 m6 center"
            style={{ fontFamily: "sans-serif", padding: "10px" }}
          >
            <h5>Android Development</h5>
            <p className="green-text text-darken-4">
              Every year Google developers release exciting new updates to the
              world's most popular operating system. We always have sessions to
              keep you updated and mastering the latest trends in modern Android
              development.
            </p>
            <a
              href="https://developers.google.com/community/dsc"
              className="waves-effect waves-light btn blue darken-4 center"
            >
              Codelabs <i className="material-icons right">send</i>
            </a>
          </div>
          <div className="col s12 m6" style={{ padding: "20px" }}>
            <img src={img} alt="#" style={{ width: "100%", height: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6" style={{ padding: "20px" }}>
            <img src={ml} alt="#" style={{ width: "100%", height: "50%" }} />
          </div>
          <div
            className="col s12 m6 center"
            style={{ fontFamily: "sans-serif", padding: "10px" }}
          >
            <h5>Machine Intelligence</h5>
            <p className="red-text text-darken-4">
              Learn how to drive user engagement and retention with intelligent
              apps that are able to effectively serve users what they need
              without the fuss by providing these systems with the ability to
              automatically learn and improve from experience without being
              explicitly programmed.
            </p>
            <a
              href="https://developers.google.com/community/dsc"
              className="waves-effect waves-light btn blue darken-4 center"
            >
              Codelabs <i className="material-icons right">send</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
