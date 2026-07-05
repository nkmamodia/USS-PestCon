"use client";
import { useState } from "react";
import AuthPopup from "./AuthPopup";

export default function BookingPopup({ onClose }: { onClose: () => void }) {
  const [authTab, setAuthTab] = useState<null | "signin" | "signup">(null);

  if (authTab) {
    return <AuthPopup defaultTab={authTab} onClose={onClose} />;
  }

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#0b2038", borderRadius: 16, padding: "44px 40px",
        maxWidth: 440, width: "100%",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.6)",
        position: "relative", textAlign: "center",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16,
          background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 8,
          width: 32, height: 32, color: "rgba(255,255,255,0.6)",
          fontSize: 16, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>✕</button>

        <div style={{ fontSize: 40, marginBottom: 16 }}>🔐</div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: "white", marginBottom: 10, fontFamily: "var(--font-display)" }}>
          Sign In Required
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
          Please sign in or create a free account to book your inspection. It only takes a minute.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setAuthTab("signin")} style={{
            background: "#0d9488", color: "white",
            padding: "12px 28px", borderRadius: 9,
            fontSize: 14, fontWeight: 600, border: "none",
            cursor: "pointer", fontFamily: "inherit",
          }}>Sign In</button>
          <button onClick={() => setAuthTab("signup")} style={{
            background: "transparent", color: "white",
            padding: "12px 28px", borderRadius: 9,
            fontSize: 14, fontWeight: 600, cursor: "pointer",
            border: "1.5px solid rgba(255,255,255,0.3)",
            fontFamily: "inherit",
          }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
