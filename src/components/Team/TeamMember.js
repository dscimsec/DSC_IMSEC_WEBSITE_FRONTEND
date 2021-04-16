const TeamMember = ({ name, designation, profiles,profile_pic }) => {
  return (
    <div className="card" style={{height:"140%" ,width:"100%"}}>
      <img src={profile_pic} alt="#" style={{width:"100%",height:"50%"}}/>
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
              <a href={profiles.facebook}>
                <i class="bi bi-facebook"></i>{" "}
              </a>
            </div>
          )}
          {profiles.github && (
            <div className="col s2">
              <a href={profiles.github}>
              <i class="bi bi-github"></i>{" "}
              </a>
            </div>
          )}
          {profiles.linkedin && (
            <div className="col s2">
              <a href={profiles.linkedin}>
              <i class="bi bi-linkedin"></i>{" "}
              </a>
            </div>
          )}
          {profiles.twitter && (
            <div className="col s2">
              <a href={profiles.twitter}>
              <i class="bi bi-twitter"></i>{" "}
              </a>
            </div>
          )}{" "}
          {profiles.instagram && (
            <div className="col s2">
              <a href={profiles.instagram}>
              <i class="bi bi-instagram"></i>{" "}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
