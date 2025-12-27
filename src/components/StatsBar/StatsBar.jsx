import "./StatsBar.css";

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-container">
        <div className="stat">
          <h3>1 Million+</h3>
          <p>Trusted Parents</p>
        </div>

        <div className="stat">
          <h3>22+</h3>
          <p>Years of Legacy</p>
        </div>

        <div className="stat">
          <h3>500+</h3>
          <p>Participating Schools</p>
        </div>

        <div className="stat">
          <h3>17 Cities</h3>
          <p>Across India</p>
        </div>
      </div>
    </section>
  );
}
