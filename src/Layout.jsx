import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h2 style={{ margin: 0 }}>Veluxo LLC</h2>
          <p style={{ margin: 0, opacity: 0.7 }}>Premium Products. Smart Solutions.</p>
        </div>

        <nav style={{ display: "flex", gap: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Outlet />

      <footer style={{ marginTop: 64, opacity: 0.6 }}>
        © {new Date().getFullYear()} Veluxo LLC
      </footer>
    </div>
  );
}
