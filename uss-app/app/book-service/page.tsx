"use client";
import { useState } from "react";
import BookingPopup from "@/app/components/BookingPopup";

export default function BookServicePage() {
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
        }}>Book Service</h1>
      </section>

      {/* POLITE MESSAGE + BUTTON */}
      <section style={{ padding: "80px 5%", background: "#f9fafb" }}>
        <div style={{
          maxWidth: 620, margin: "0 auto", textAlign: "center",
          background: "white", borderRadius: 20,
          border: "1px solid #e5e7eb",
          padding: "56px 48px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>📋</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#111827", marginBottom: 16, fontWeight: 700,
          }}>
            Book Your Free Inspection
          </h2>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8, marginBottom: 12 }}>
            We'd love to help protect your home or business from pests. Our certified technician will visit your property, assess the situation thoroughly, and provide you with a clear, honest quote — completely free of charge, with no obligations.
          </p>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
            To book your inspection, a quick sign-in is required so we can keep track of your appointment and send you timely updates. It only takes a minute to create a free account.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            style={{
              background: "#0d9488", color: "white",
              padding: "14px 36px", borderRadius: 9,
              border: "none", fontSize: 15, fontWeight: 600,
              cursor: "pointer", letterSpacing: "0.02em",
            }}>
            Book Free Inspection
          </button>
          <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 16 }}>
            🔒 Your information is private and will never be shared.
          </p>
        </div>
      </section>

    </main>
  );
}
