import { Link } from "react-router-dom";
import Logo from "./components/Logo.jsx";


export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Logo />

        <nav style={{ display: "flex", gap: 18, fontWeight: 600 }}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
