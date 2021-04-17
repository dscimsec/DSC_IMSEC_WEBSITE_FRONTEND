import TechCard from "./TechCard";

const Tech = (props) => {
  return (
    <div className="container">
      <div className="center" style={{marginBottom:"50px"}}>
        <h4 style={{ fontFamily: "Valid family names" }}>
          <span className="blue-text text-darken-4"> Technologies </span> We're Excited About
        </h4>
        <p className="grey-text" style={{ fontFamily:"Valid family names"}}>
          Opportunities to learn & access deep technical content.
        </p>
      </div>
      <div style={{ marginTop: "20px",padding:'30px' }} >
        {props.techData.map((tech) => (
          <TechCard
            key={tech.tech_code}
            name={tech.name}
            about={tech.about}
            codelabs_link={tech.codelabs_link}
            avatar={`${process.env.REACT_APP_BACKEND_URL}/${tech.avatar}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Tech;
