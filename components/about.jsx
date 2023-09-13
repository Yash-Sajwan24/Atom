const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="about-title text-[40px]">What is Atom?</h1>
        <p className="about-para mt-10">
          A directory of mental health resources, such as self assessment tools,
          forum or discussion groups, crisis support, education resources and
          self-help resources, along with information about various mental
          health disorders.
        </p>
        <div className="about-container mt-10">
          <div className="about-box">
            <img
              src="/mood-track.png"
              alt="mood-track"
              width="60px"
              height="60px"
            />
            <h2>Self Assement Tool</h2>
          </div>
          <div className="about-box">
            <img
              src="/education.png"
              alt="mood-track"
              width="60px"
              height="60px"
            />
            <h2>Education</h2>
          </div>
          <div className="about-box">
            <img src="/relax.png" alt="mood-track" width="60px" height="60px" />
            <h2>Vent It Out</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
