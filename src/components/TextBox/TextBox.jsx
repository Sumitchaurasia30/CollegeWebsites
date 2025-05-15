import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>World&apos;s Biggest University</h1>
      <p>
       We are Providing online presence of an educational institution, designed to provide comprehensive<br/> information to students, faculty, parents, and prospective applicants. It typically includes details about <br/>academic programs, admissions etc.
       
      </p>
      <Link to="/" className="hero-btn">
        Visit us To Know More
      </Link>
    </div>
  );
};

export default TextBox;
