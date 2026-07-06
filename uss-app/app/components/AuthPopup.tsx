"use client";
import { useState, useEffect, useRef } from "react";
import { business } from "@/config/business";

export default function AuthPopup({ defaultTab = "signin", onClose }: { defaultTab?: "signin" | "signup"; onClose: () => void }) {
  const [tab, setTab] = useState<"signin" | "signup">(defaultTab);
  const [step, setStep] = useState<"form" | "success">("form");
  const [signinData, setSigninData] = useState({ mobile: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", mobile: "", email: "", address: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(3);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [forgotClicked, setForgotClicked] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setTimeout(() => firstInputRef.current?.focus(), 100); }, [tab]);

  useEffect(() => {
    if (step === "success") {
      const interval = setInterval(() => setCountdown(c => c - 1), 1000);
      const timeout = setTimeout(() => { onClose(); }, 3000);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    }
  }, [step]);

  const inputStyle = {
    width: "100%", padding: "11px 14px",
    border: "1px solid #e2e8f0", borderRadius: 8,
    fontSize: 14, background: "#f1f5f9",
    color: "#0c4a6e", outline: "none", fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block" as const, fontSize: 12, fontWeight: 600 as const,
    color: "#64748b", marginBottom: 6, letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
  };

  const fieldStyle = { marginBottom: 14 };

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePassword(password: string) {
    return password.length >= 8 && /\d/.test(password);
  }

  function handleSignIn() {
    if (!signinData.mobile || signinData.mobile.length < 10) {
      setError("Please enter a valid 10-digit mobile number."); return;
    }
    if (!signinData.password) {
      setError("Please enter your password."); return;
    }
    setError(""); setStep("success"); setCountdown(3);
  }

  function handleSignUp() {
    if (!signupData.name.trim()) { setError("Please enter your full name."); return; }
    if (!signupData.mobile || signupData.mobile.length < 10) { setError("Please enter a valid 10-digit mobile number."); return; }
    if (!signupData.email || !validateEmail(signupData.email)) { setError("Please enter a valid email address (e.g. name@example.com)."); return; }
    if (!signupData.address.trim()) { setError("Please enter your address."); return; }
    if (!validatePassword(signupData.password)) { setError("Password must be at least 8 characters and include at least 1 number."); return; }
    if (signupData.password !== signupData.confirmPassword) { setError("Passwords do not match."); return; }
    setError(""); setStep("success"); setCountdown(3);
  }

  function handleEnter(e: React.KeyboardEvent, action: () => void) {
    if (e.key === "Enter") action();
  }

  function switchTab(t: "signin" | "signup") {
    setTab(t); setStep("form"); setError(""); setForgotClicked(false);
  }

  const eyeButtonStyle = {
    position: "absolute" as const, right: 10, top: "50%",
    transform: "translateY(-50%)", background: "none", border: "none",
    cursor: "pointer", fontSize: 16, color: "#64748b", padding: 4,
  };

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#ffffff", borderRadius: 18,
        padding: "36px 32px",
        maxWidth: 440, width: "100%",
        maxHeight: "90vh", overflowY: "auto",
        boxShadow: "0 0 0 1px rgba(14,165,233,0.15), 0 24px 60px rgba(0,0,0,0.18), 0 0 40px rgba(14,165,233,0.08)",
        position: "relative",
      }}>

        <button onClick={onClose} style={{
          position: "absolute", top: 14, right: 14,
          background: "#f1f5f9", border: "none", borderRadius: 8,
          width: 32, height: 32, color: "#64748b", fontSize: 16,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}>✕</button>

        {step === "success" && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0c4a6e", fontFamily: "var(--font-display)", marginBottom: 10 }}>
              {tab === "signin" ? "Welcome back!" : "Account created!"}
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
              {tab === "signin" ? "You have signed in successfully." : "Your account has been created successfully."}
              <br />Closing in <strong style={{ color: "#0ea5e9" }}>{countdown}</strong> seconds...
            </p>
          </div>
        )}

        {step === "form" && (<>

          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#0ea5e9", textTransform: "uppercase", marginBottom: 6 }}>
              WELCOME TO ULTIMATE SERVICE SOLUTIONS
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#0c4a6e", fontFamily: "var(--font-display)" }}>
              Your Protection Starts Here
            </div>
          </div>

          <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 10, padding: 4, marginBottom: 24 }}>
            {(["signin", "signup"] as const).map((t) => (
              <button key={t} onClick={() => switchTab(t)} style={{
                flex: 1, padding: "9px 0", border: "none",
                borderRadius: 8, fontSize: 14, fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s",
                background: tab === t ? "#0ea5e9" : "transparent",
                color: tab === t ? "white" : "#64748b",
                fontFamily: "inherit",
              }}>{t === "signin" ? "Sign In" : "Sign Up"}</button>
            ))}
          </div>

          {error && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#dc2626", marginBottom: 14 }}>
              {error}
            </div>
          )}

          {tab === "signin" && (
            <div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Mobile Number</label>
                <input ref={firstInputRef} type="tel" maxLength={10}
                  placeholder="Enter your registered mobile number"
                  value={signinData.mobile}
                  onChange={e => setSigninData({ ...signinData, mobile: e.target.value.replace(/\D/g, "") })}
                  onKeyDown={e => handleEnter(e, handleSignIn)}
                  style={inputStyle} />
              </div>
              <div style={{ ...fieldStyle, position: "relative" }}>
                <label style={labelStyle}>Password</label>
                <input type={showPassword ? "text" : "password"} placeholder="Enter your password"
                  value={signinData.password}
                  onChange={e => setSigninData({ ...signinData, password: e.target.value })}
                  onKeyDown={e => handleEnter(e, handleSignIn)}
                  style={inputStyle} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ ...eyeButtonStyle, top: 38 }}>
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              <div style={{ textAlign: "right", marginBottom: 16 }}>
                <button type="button" onClick={() => setForgotClicked(true)} style={{
                  background: "none", border: "none", color: "#0ea5e9",
                  fontSize: 12, cursor: "pointer", fontFamily: "inherit", padding: 0,
                }}>Forgot Password?</button>
              </div>
              {forgotClicked && (
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16, lineHeight: 1.6, background: "#f1f5f9", borderRadius: 8, padding: "10px 12px" }}>
                  Password reset isn't available yet. Please call us at <strong>{business.phoneDisplay}</strong> and we'll help you directly.
                </div>
              )}
              <button onClick={handleSignIn} style={{
                width: "100%", background: "#0ea5e9", color: "white",
                padding: "13px", borderRadius: 9, border: "none",
                fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>Sign In</button>
            </div>
          )}

          {tab === "signup" && (
            <div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Full Name</label>
                <input ref={firstInputRef} type="text" placeholder="Your full name"
                  value={signupData.name}
                  onChange={e => setSignupData({ ...signupData, name: e.target.value })}
                  onKeyDown={e => handleEnter(e, handleSignUp)}
                  style={inputStyle} />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Mobile Number</label>
                <input type="tel" maxLength={10} placeholder="10-digit mobile number"
                  value={signupData.mobile}
                  onChange={e => setSignupData({ ...signupData, mobile: e.target.value.replace(/\D/g, "") })}
                  onKeyDown={e => handleEnter(e, handleSignUp)}
                  style={inputStyle} />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Email Address</label>
                <input type="email" placeholder="name@example.com"
                  value={signupData.email}
                  onChange={e => setSignupData({ ...signupData, email: e.target.value })}
                  onKeyDown={e => handleEnter(e, handleSignUp)}
                  style={inputStyle} />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Address</label>
                <input type="text" placeholder="Your full address"
                  value={signupData.address}
                  onChange={e => setSignupData({ ...signupData, address: e.target.value })}
                  onKeyDown={e => handleEnter(e, handleSignUp)}
                  style={inputStyle} />
              </div>
              <div style={{ ...fieldStyle, position: "relative" }}>
                <label style={labelStyle}>Password</label>
                <input type={showPassword ? "text" : "password"} placeholder="At least 8 characters, 1 number"
                  value={signupData.password}
                  onChange={e => setSignupData({ ...signupData, password: e.target.value })}
                  onKeyDown={e => handleEnter(e, handleSignUp)}
                  style={inputStyle} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ ...eyeButtonStyle, top: 38 }}>
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              <div style={{ ...fieldStyle, position: "relative" }}>
                <label style={labelStyle}>Confirm Password</label>
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Re-enter your password"
                  value={signupData.confirmPassword}
                  onChange={e => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  onKeyDown={e => handleEnter(e, handleSignUp)}
                  style={inputStyle} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ ...eyeButtonStyle, top: 38 }}>
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>
              <button onClick={handleSignUp} style={{
                width: "100%", background: "#0ea5e9", color: "white",
                padding: "13px", borderRadius: 9, border: "none",
                fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>Create Account</button>
            </div>
          )}

          <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", marginTop: 18 }}>
            🔒 Your information is private and will never be shared.
          </p>

        </>)}
      </div>
    </div>
  );
}
