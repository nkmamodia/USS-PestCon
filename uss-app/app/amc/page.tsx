"use client";
import { useState } from "react";
import { amcPlans } from "@/config/services";
import BookingPopup from "@/app/components/BookingPopup";

export default function AMCPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main>
      {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}

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
        }}>AMC Plans</h1>
      </section>

      {/* INTRO */}
      <section style={{ background: "#0b2038", padding: "60px 5% 0", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 60%, rgba(13,148,136,0.16) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2dd4bf", marginBottom: 10 }}>
            Annual Maintenance Contracts
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)", color: "white", marginBottom: 16, lineHeight: 1.2 }}>
            Ongoing Protection Plans
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            One-time treatments are good. Regular protection is better. Our AMC plans keep your property pest-free all year with scheduled visits and priority response.
          </p>
        </div>

        {/* AMC CARDS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24, maxWidth: 1100, margin: "48px auto 0",
          paddingBottom: 60, position: "relative", zIndex: 2,
        }}>
          {amcPlans.map((plan) => (
            <div key={plan.title} style={{
              background: plan.featured ? "rgba(13,148,136,0.12)" : "rgba(255,255,255,0.05)",
              border: plan.featured ? "1px solid rgba(94,234,212,0.4)" : "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20, padding: 28,
              transition: "all 0.25s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = plan.featured ? "rgba(13,148,136,0.12)" : "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{
                display: "inline-block", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                background: "#0d9488", color: "white",
                borderRadius: 50, padding: "3px 12px", marginBottom: 16,
              }}>{plan.badge}</div>

              <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", fontFamily: "var(--font-display)", marginBottom: 8 }}>
                {plan.title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 24 }}>
                {plan.description}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((f: string) => (
                  <li key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "#2dd4bf", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0b2038", padding: "0 5% 80px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 20 }}>
          AMC pricing depends on property size and treatment type. Get a custom quote.
        </p>
        <button
          onClick={() => setShowPopup(true)}
          style={{
            background: "#0d9488", color: "white",
            padding: "14px 36px", borderRadius: 9,
            border: "none", fontSize: 15, fontWeight: 600,
            cursor: "pointer", letterSpacing: "0.02em",
          }}>
          Request AMC Quote
        </button>
      </section>

    </main>
  );
}
