"use client";
import { useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AuthPopup from "@/app/components/AuthPopup";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [authPopup, setAuthPopup] = useState<null | "signin" | "signup">(null);

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>

        <style>{`
          .nav-link { position: relative; padding-bottom: 2px; font-size: 14px; font-weight: 500; color: #4b5563; text-decoration: none; }
          .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: #f97316; transform: scaleX(0); transform-origin: left; transition: transform 0.2s; }
          .nav-link:hover::after { transform: scaleX(1); }
          .nav-link:hover { color: #0b2038; }
          .signup-btn { transition: box-shadow 0.2s, background 0.2s; }
          .signup-btn:hover { background: #0d9488 !important; box-shadow: 0 0 18px rgba(13,148,136,0.65), 0 0 36px rgba(13,148,136,0.3) !important; }
          @media (max-width: 900px) { .nav-links { display: none; } }
        `}</style>

        {authPopup && <AuthPopup defaultTab={authPopup} onClose={() => setAuthPopup(null)} />}

        <nav style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e5e7eb",
          padding: "0 5%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "68px",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "#0b2038",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 700, fontSize: 15,
            }}>USS</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b2038" }}>Ultimate Service Solutions</div>
              <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.06em", textTransform: "uppercase" }}>Pest Control Experts</div>
            </div>
          </Link>

          <div className="nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link href="/#about"       className="nav-link">About</Link>
            <Link href="/services"     className="nav-link">Services</Link>
            <Link href="/amc"          className="nav-link">AMC</Link>
            <Link href="/gallery"      className="nav-link">Gallery</Link>
            <Link href="/book-service" className="nav-link">Book Service</Link>
            <div style={{ width: 1, height: 20, background: "#e5e7eb" }} />
            <button onClick={() => setAuthPopup("signin")} className="nav-link" style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
              Sign in
            </button>
            <button onClick={() => setAuthPopup("signup")} className="signup-btn" style={{
              fontSize: 14, fontWeight: 600, color: "white",
              background: "#0b2038", padding: "9px 20px", borderRadius: 8,
              border: "none", cursor: "pointer", fontFamily: "inherit",
            }}>Sign up</button>
          </div>
        </nav>

        {children}

        {/* SOCIAL MEDIA */}
        <section id="social" style={{ padding: "80px 5%", background: "#f9fafb" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0d9488", marginBottom: 10 }}>Follow Us</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#111827", marginBottom: 16 }}>Stay Connected</h2>
            <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 48 }}>Our social media pages are coming soon. Follow us for updates, tips, and offers.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              {[{ name: "Facebook", icon: "📘" }, { name: "Instagram", icon: "📸" }, { name: "YouTube", icon: "📺" }, { name: "LinkedIn", icon: "💼" }].map((p) => (
                <div key={p.name} style={{
                  width: 120, height: 90, borderRadius: 12,
                  border: "2px dashed #e5e7eb", background: "white",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: 8, color: "#9ca3af",
                }}>
                  <div style={{ fontSize: 24 }}>{p.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{p.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#111827", color: "rgba(255,255,255,0.7)", padding: "60px 5% 30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "white", marginBottom: 10, fontWeight: 700 }}>Ultimate Service Solutions</div>
              <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 20, color: "rgba(255,255,255,0.55)" }}>
                Trusted pest control serving Delhi NCR and Haryana since 2012. Certified technicians, guaranteed results.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="tel:8700893598" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>📞 +91 87008 93598</a>
                <a href="mailto:ultimateservicesolutionss@gmail.com" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>📧 ultimateservicesolutionss@gmail.com</a>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>📍 Haryana, India</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>⏰ Mon–Sat: 8:00 AM – 7:00 PM</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>Quick Links</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[{ label: "About", href: "/#about" }, { label: "Services", href: "/services" }, { label: "AMC Plans", href: "/amc" }, { label: "Gallery", href: "/gallery" }, { label: "Book Service", href: "/book-service" }].map((l) => (
                  <Link key={l.label} href={l.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{l.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>Service Areas</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Delhi NCR", "Gurugram", "Faridabad", "Haryana (All Districts)", "Noida"].map((a) => (
                  <span key={a} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{a}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            <span>© 2026 Ultimate Service Solutions. All rights reserved.</span>
            <span>Est. 2012 · Haryana, India</span>
          </div>
        </footer>

        {/* WHATSAPP FLOAT */}
        <a href="https://wa.me/918700893598?text=Hi%2C%20I%20need%20pest%20control%20services."
          target="_blank" rel="noopener"
          style={{
            position: "fixed", bottom: 28, right: 28, zIndex: 999,
            width: 56, height: 56, borderRadius: "50%",
            background: "#25D366", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
            textDecoration: "none",
          }}>💬</a>

      </body>
    </html>
  );
}
