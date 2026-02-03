export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h2 style={{ margin: 0 }}>Veluxo LLC</h2>
          <p style={{ margin: 0, opacity: 0.8 }}>Premium Products. Smart Solutions.</p>
        </div>

        <nav style={{ display: "flex", gap: 16 }}>
          <a href="#shop">Shop</a>
          <a href="#stores">Stores</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>Veluxo Online Store</h1>
        <p style={{ maxWidth: 700, opacity: 0.85 }}>
          Discover curated consumer products designed for modern living. Browse featured items and buy through our official stores.
        </p>
      </section>

      <section id="shop" style={{ marginBottom: 40 }}>
        <h2>Featured Products</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {["Product One", "Product Two", "Product Three", "Product Four", "Product Five", "Product Six"].map((product) => (
            <div key={product} style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
              <div style={{ height: 140, background: "#f3f4f6", borderRadius: 12 }} />
              <h3 style={{ marginTop: 12 }}>{product}</h3>
              <p style={{ opacity: 0.8 }}>$00.00</p>

              <div style={{ display: "flex", gap: 10 }}>
                <button>View</button>
                <button>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stores" style={{ marginBottom: 40 }}>
        <h2>Buy on Our Official Stores</h2>
        <p style={{ opacity: 0.85 }}>Choose your preferred platform to complete your purchase.</p>

        <div style={{ display: "flex", gap: 16 }}>
          <a href="#">Shopify</a>
          <a href="#">Amazon</a>
          <a href="#">TikTok Shop</a>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: info@veluxollc.com</p>
      </section>

      <footer style={{ marginTop: 48, paddingTop: 16, borderTop: "1px solid #e5e7eb", opacity: 0.7 }}>
        © {new Date().getFullYear()} Veluxo LLC
      </footer>
    </div>
  );
}
