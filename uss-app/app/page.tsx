"use client";
import { useState } from "react";
import { business } from "@/config/business";
import BookingPopup from "@/app/components/BookingPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main>
      {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}

      {/* HERO */}
      <section style={{
        minHeight: "92vh",
        backgroundImage: "linear-gradient(rgba(11,32,56,0.82), rgba(11,32,56,0.88)), url('https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover", backgroundPosition: "center",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "80px 5% 60px",
      }}>
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800,
          letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.1,
          fontFamily: "var(--font-display)",
          background: "linear-gradient(135deg, #c8d8e8 0%, #ffffff 50%, #a8c4d8 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          Ultimate Service Solutions
        </h1>
        <p style={{ fontSize: "clamp(16px, 2.5vw, 26px)", color: "rgba(255,255,255,0.92)", marginTop: 16, fontWeight: 300, letterSpacing: "0.12em" }}>
          Pest Control Services
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => setShowPopup(true)}
            style={{ background: "#0d9488", color: "white", padding: "14px 32px", borderRadius: 9, border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
            Book Free Inspection
          </button>
          <a href={`tel:${business.phone}`} style={{
            background: "transparent", color: "white",
            padding: "14px 32px", borderRadius: 9,
            border: "1.5px solid rgba(255,255,255,0.4)",
            fontSize: 15, fontWeight: 500,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            📞 Call Now: {business.phoneDisplay}
          </a>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0b2038", padding: "36px 5%", display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 80px)", flexWrap: "wrap" }}>
        {[
          { value: business.yearsActive,            label: "Years Active" },
          { value: business.jobsDone,               label: "Jobs Done" },
          { value: "2",                             label: "Regions Covered" },
          { value: business.satisfactionGuarantee,  label: "Satisfaction Guarantee" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#5eead4", fontFamily: "var(--font-display)", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* TRUST BAR */}
      <section style={{ background: "#f0fdfa", borderBottom: "1px solid #5eead4", padding: "16px 5%", display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(20px, 4vw, 48px)", flexWrap: "wrap" }}>
        {["✅ Government Approved Chemicals", "👷 Certified & Trained Technicians", "⚡ Same Day Service Available", "💚 Safe for Kids & Pets"].map((item) => (
          <span key={item} style={{ fontSize: 13, fontWeight: 500, color: "#0f766e" }}>{item}</span>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 5%", background: "#f9fafb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0d9488", marginBottom: 10 }}>About Us</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#111827", marginBottom: 16, lineHeight: 1.2 }}>
            {business.yearsActive} Years of Trust. Not Just a Business.
          </h2>
          <p style={{ fontSize: 16, color: "#4b5563", maxWidth: 620, lineHeight: 1.8, marginBottom: 48 }}>
            Started in {business.established} as a family-run pest control company, we've grown by doing one thing right — showing up, solving the problem, and standing behind our work across {business.areas.join(" and ")}.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { num: "01", title: "Certified Technicians",             desc: "Every technician is trained, tested, and carries a verified ID. No subcontracting, no surprises." },
              { num: "02", title: "Government-Approved Chemicals",     desc: "We use only CIB & RC registered pesticides — safe for your family, compliant with all regulations." },
              { num: "03", title: "Written Warranty on Every Job",     desc: "If pests return within the warranty period, we come back at zero extra cost. Period." },
              { num: "04", title: "Commercial & Industrial Experience", desc: "Hotels, hospitals, factories, warehouses — we understand compliance requirements and work within them." },
            ].map((p) => (
              <div key={p.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: "#0b2038", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{p.num}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 4 }}>{p.title}</div>
                  <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "80px 5%", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0d9488", marginBottom: 10 }}>Customer Reviews</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#111827", marginBottom: 16 }}>What Our Clients Say</h2>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 48 }}>Real reviews from Google — coming soon.</p>
          <div style={{ border: "2px dashed #e5e7eb", borderRadius: 16, padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 40 }}>⭐</div>
            <div style={{ fontSize: 16, fontWeight: 500, color: "#6b7280" }}>Google Reviews will appear here</div>
            <div style={{ fontSize: 13, color: "#9ca3af" }}>This section will be connected to your Google Business profile.</div>
          </div>
        </div>
      </section>

    </main>
  );
}
