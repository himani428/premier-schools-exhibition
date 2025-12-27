import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Discover Gurugram’s Top 30+ Schools</h1>
          <p>All in one place</p>
          <button className="hero-btn">Register Now</button>
        </div>

        <div className="hero-images">
          <img src="src/assets/hero/hero1.jpg" className="img-1" alt="School activity" />
          <img src="src/assets/hero/hero2.jpg" className="img-2" alt="Classroom" />
          <img src="src/assets/hero/hero3.jpg" className="img-3" alt="Students" />
        </div>
      </div>
    </section>
  );
}
