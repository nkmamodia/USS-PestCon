export default function GalleryPage() {
  return (
    <main>
      <section style={{ minHeight: "40vh", backgroundImage: "linear-gradient(rgba(11,32,56,0.82), rgba(11,32,56,0.88)), url('https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 5%" }}>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-display)", background: "linear-gradient(135deg, #c8d8e8 0%, #ffffff 50%, #a8c4d8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Gallery</h1>
      </section>
      <section style={{ padding: "80px 5%", background: "#f9fafb", textAlign: "center" }}>
        <p style={{ fontSize: 16, color: "#6b7280" }}>Gallery content coming soon.</p>
      </section>
    </main>
  );
}
