import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <img src="src/assets/logo.png" alt="Premier Schools" />
        </div>

        <div className="footer-col">
          <h4>Corporate Office</h4>
          <p>
            Suite B-5, Ballygunge Park Tower<br />
            67B Ballygunge Circular Road<br />
            Kolkata - 700019
          </p>
        </div>

        <div className="footer-col">
          <h4>Ahmedabad Office</h4>
          <p>
            12/A, Swastik Chambers<br />
            Near CU Shah College<br />
            Ahmedabad - 380009
          </p>
        </div>

        <div className="footer-col">
          <h4>Call Us</h4>
          <p>+91 96748 05912</p>
          <p>+91 96745 85012</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Premier Schools Exhibition
      </div>
    </footer>
  );
}
