import img from "../../images/img1.svg";

const TeamMember = ({ name, designation, profiles,profile_pic }) => {
  return (
    <div className="card">
      <img src={profile_pic} alt="#" style={{height:"150px" , width:"200px"}}/>
      <div className="center">
        <div className="row">
          <h6>{name}</h6>
          <p>
            <b>{designation}</b>
          </p>
        </div>
        <div
          className="row"
          style={{ paddingLeft: "20px", paddingBottom: "5px" }}
        >
          {console.log(profiles)}
          {profiles.facebook && (
            <div className="col s2">
              <i class="bi bi-facebook"></i>{" "}
            </div>
          )}
          {profiles.github && (
            <div className="col s2">
              <i class="bi bi-github"></i>{" "}
            </div>
          )}
          {profiles.linkedin && (
            <div className="col s2">
              <i class="bi bi-linkedin"></i>{" "}
            </div>
          )}
          {profiles.twitter && (
            <div className="col s2">
              <i class="bi bi-twitter"></i>{" "}
            </div>
          )}{" "}
          {profiles.instagram && (
            <div className="col s2">
              <i class="bi bi-instagram"></i>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
    // <div>abcd</div>
  );
};

export default TeamMember;
