import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#333" }}>
            <Link to="/" style={{ color: "white" }}>Home</Link>
            <Link to="/about" style={{ color: "white" }}>About</Link>
            <Link to="/contact" style={{ color: "white" }}>Contact</Link>
            <Link to="/parent" style={{ color: "white" }}>Parent-Child</Link>
        </nav>
    );
}
export default Navbar;
