import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns projects-item">
          <h4>{projects.title}</h4>
          <div className="item-wrap">
            <a href={projects.url} target="_blank" title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="projects-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="projects">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>

          <div
            id="projects-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
