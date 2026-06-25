import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>YorkU Markham MSA</h3>
        <p>Building faith, community, and connection on campus.</p>
      </div>

      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="copyright">
        © 2026 YorkU Markham MSA. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;