import { Link } from "react-router-dom";

const CaseStudy = ({ data }) => {
  return (
    <div>
      <Link to={"/work/" + data.slug}>
        <h1>{data.title}</h1>
      </Link>
    </div>
  );
};

export default CaseStudy;
