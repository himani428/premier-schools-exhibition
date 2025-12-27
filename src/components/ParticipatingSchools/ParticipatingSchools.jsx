import "./ParticipatingSchools.css";

import logo1 from "../../assets/logos/school1.jpg";
import logo2 from "../../assets/logos/school2.jpg";
import logo3 from "../../assets/logos/school3.jpg";
import logo4 from "../../assets/logos/school4.jpg";
import logo5 from "../../assets/logos/school5.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5];

export default function ParticipatingSchools() {
  return (
    <section className="partners">
      <h2>Participating Schools</h2>

      <div className="logo-track">
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
