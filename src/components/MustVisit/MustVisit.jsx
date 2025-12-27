import "./MustVisit.css";

export default function MustVisit() {
  return (
    <section className="must-visit">
      <h2>What Makes This Exhibition a Must-Visit</h2>

      <div className="must-grid">
        <div className="must-card">
          <h4>Interact Directly with School Heads</h4>
          <p>Get answers straight from decision makers.</p>
        </div>

        <div className="must-card">
          <h4>Compare Curriculum & Pedagogy</h4>
          <p>CBSE, ICSE, IB, Cambridge & more.</p>
        </div>

        <div className="must-card">
          <h4>Exclusive Fee Structures</h4>
          <p>Access special offers and transparent pricing.</p>
        </div>

        <div className="must-card">
          <h4>Explore School Facilities</h4>
          <p>Infrastructure, learning methods & environment.</p>
        </div>
      </div>
    </section>
  );
}
