import "./SchoolCategories.css";

const data = [
  { title: "Pre-Schools", text: "Foundational learning" },
  { title: "K–12 Schools", text: "CBSE, ICSE, IB" },
  { title: "International", text: "Global curriculum" },
  { title: "New Age Schools", text: "Tech-first learning" }
];

export default function SchoolCategories() {
  return (
    <section className="categories">
      {data.map((item, i) => (
        <div className="category-card" key={i}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}
