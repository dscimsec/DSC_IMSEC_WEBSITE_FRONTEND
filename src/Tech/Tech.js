import TechCard from "./TechCard";

const Tech = (props) => {
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
        {props.techData.map((tech) => (
          <TechCard
            key={tech.tech_code}
            name={tech.name}
            about={tech.about}
            codelabs_link={tech.codelabs_link}
            avatar={tech.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Tech;
