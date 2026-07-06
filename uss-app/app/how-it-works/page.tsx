export default function HowItWorksPage() {
  const steps = [
    { num: "1", title: "Call or Book Online", desc: "Tell us your location, property type, and the pest problem. Takes 2 minutes." },
    { num: "2", title: "Free Inspection Visit", desc: "Our technician visits, assesses the infestation level, and gives you a clear quote." },
    { num: "3", title: "Treatment Carried Out", desc: "Professional treatment using approved chemicals. Usually completed same or next day." },
    { num: "4", title: "Warranty & Follow-Up", desc: "Written warranty issued. We follow up to confirm the problem is fully resolved." },
  ];

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
        }}>How It Works</h1>
      </section>

      {/* STEPS */}
      <section style={{ padding: "80px 5%", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* INTRO */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0d9488", marginBottom: 10 }}>
              Our Process
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#111827", marginBottom: 16 }}>
              From Call to Clear — Simple 4-Step Process
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              We make pest control simple, transparent, and stress-free from the very first call.
            </p>
          </div>

          {/* DESKTOP HORIZONTAL TIMELINE */}
          <div className="steps-desktop" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr", alignItems: "flex-start", gap: 0 }}>
            {steps.map((step, index) => (
              <>
                {/* STEP CARD */}
                <div key={step.num} style={{ textAlign: "center", padding: "0 12px" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "white", border: "2px solid #0d9488",
                    color: "#0d9488", fontSize: 22, fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 4px 16px rgba(13,148,136,0.15)",
                  }}>{step.num}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 8 }}>{step.title}</h4>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{step.desc}</p>
                </div>

                {/* ARROW BETWEEN STEPS */}
                {index < steps.length - 1 && (
                  <div key={`arrow-${index}`} style={{
                    display: "flex", alignItems: "flex-start", paddingTop: 20,
                    color: "#0d9488", fontSize: 22, fontWeight: 300,
                  }}>→</div>
                )}
              </>
            ))}
          </div>

          {/* MOBILE VERTICAL TIMELINE */}
          <div className="steps-mobile" style={{ display: "none", flexDirection: "column", gap: 0 }}>
            {steps.map((step, index) => (
              <div key={step.num}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                      background: "white", border: "2px solid #0d9488",
                      color: "#0d9488", fontSize: 18, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 4px 16px rgba(13,148,136,0.15)",
                    }}>{step.num}</div>
                    {index < steps.length - 1 && (
                      <div style={{ width: 2, height: 40, background: "#0d9488", opacity: 0.3, margin: "8px 0" }} />
                    )}
                  </div>
                  <div style={{ paddingTop: 12, paddingBottom: index < steps.length - 1 ? 0 : 0 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 6 }}>{step.title}</h4>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .steps-desktop { display: none !important; }
          .steps-mobile { display: flex !important; }
        }
      `}</style>
    </main>
  );
}
