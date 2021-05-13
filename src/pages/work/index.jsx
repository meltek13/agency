import React from "react";
import data from "components/data/project.json";
import CaseStudy from "components/CaseStudy";
import { useParams } from "react-router-dom";

const Work = () => {
  const { project } = useParams();

  if (project) {
    return (
      <div>
        {data.project.map((x) => {
          if (x.slug === project) {
            return (
              <div>
                <h1>{x.title}</h1>
                <p>{x.content}</p>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="bodyWork">
        <h1>Work</h1>
        {data.project.map((x) => {
          return <CaseStudy data={x} />;
        })}
      </div>
    );
  }
};
export default Work;
