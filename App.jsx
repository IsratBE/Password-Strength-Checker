import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&#]/.test(password)) strength++;

    return strength;
  };

  const strengthText = ["Very Weak", "Weak", "Good", "Strong", "Very Strong"];
  const strengthColors = ["#ff4d4d", "#ff944d", "#ffd11a", "#4CAF50", "#2e7d32"];

  const strength = getStrength();

  return (
    <div className="container">
      <h1>Password Strength Checker</h1>

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{
            width: `${(strength / 4) * 100}%`,
            backgroundColor: strengthColors[strength],
          }}
        ></div>
      </div>

      <p className="strength-text" style={{ color: strengthColors[strength] }}>
        {password && strengthText[strength]}
      </p>

      <ul className="rules">
        <li className={password.length >= 8 ? "valid" : ""}>At least 8 characters</li>
        <li className={/[A-Z]/.test(password) ? "valid" : ""}>One uppercase letter</li>
        <li className={/[0-9]/.test(password) ? "valid" : ""}>One number</li>
        <li className={/[@$!%*?&#]/.test(password) ? "valid" : ""}>
          One special character
        </li>
      </ul>
    </div>
  );
}

export default App;
