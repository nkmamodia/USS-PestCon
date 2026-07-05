"use client";
import { services } from "@/config/services";

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        minHeight: "40vh",
        backgroundImage: "linear-gradient(rgba(11,32,56,0.82), rgba(11,32,56,0.88)), url('https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover", backgroundPosition: "center",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "80px 5%",
      }}>
        <h1 style={{
          fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 800,
          letterSpacing: "0.1em", textTransform: "uppercase",
          fontFamily: "var(--font-display)",
          background: "linear-gradient(135deg, #c8d8e8 0%, #ffffff 50%, #a8c4d8 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>Services</h1>
      </section>

      {/* 9 SERVICE CARDS */}
      <section style={{ padding: "80px 5%", background: "#f9fafb" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {services.map((service) => (
            <div key={service.title}
              style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 20, padding: 28, transition: "all 0.25s", cursor: "default" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#5eead4"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"; }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "#f0fdfa", border: "1px solid #5eead4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 18 }}>{service.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#111827", marginBottom: 8 }}>{service.title}</h3>
              <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.65, marginBottom: 16 }}>{service.description}</p>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, background: "#f0fdfa", color: "#0f766e", borderRadius: 50, padding: "3px 10px" }}>{service.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
