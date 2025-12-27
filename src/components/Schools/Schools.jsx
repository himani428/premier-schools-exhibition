import "./Schools.css";

export default function Schools() {
  const schools = [
    { title: "Pre-Schools", desc: "Foundational learning" },
    { title: "K–12 Schools", desc: "CBSE, ICSE, IB" },
    { title: "International", desc: "Global curriculum" },
    { title: "New Age Schools", desc: "Tech-first learning" }
  ];

  return (
    <section className="schools">
      {schools.map((s, i) => (
        <article key={i} className="school-card">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </article>
      ))}
    </section>
  );
}
