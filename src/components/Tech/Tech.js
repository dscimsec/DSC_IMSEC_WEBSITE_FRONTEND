import TechCard from "./TechCard";

const Tech = (props) => {
  return (
    <>
      <div className="container">
        <section className="center" style={{ marginBottom: "50px" }}>
          <h4 >
            <span className="blue-text text-darken-4"> Technologies </span>{" "}
            We're Excited About
          </h4>
          <p className="grey-text" >
            Opportunities to learn & access deep technical content.
          </p>
        </section>
        <div style={{ marginTop: "20px" }}>
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
    </>
  );
};

export default Tech;
