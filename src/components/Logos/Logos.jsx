import "./Logos.css";

import logo1 from "../../assets/logos/school1.jpg";
import logo2 from "../../assets/logos/school2.jpg";
import logo3 from "../../assets/logos/school3.jpg";
import logo4 from "../../assets/logos/school4.jpg";
import logo5 from "../../assets/logos/school5.jpg";
import logo6 from "../../assets/logos/school6.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function Logos() {
  return (
    <section className="logos">
      <div className="logos-track">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="School logo"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
