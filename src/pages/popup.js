// Popups.jsx
import React, { useState } from "react";

export default function PopupManager({ setPopup }) {
  const [step, setStep] = useState(1); // 1 = form, 2 = code, 3 = success

  return (
    <div className="popup-overlay">
      {step === 1 && (
        <div className="popup-box">
          <p className="popup-subtitle">
            Awesome! Let's Now Set Up Your School Profile.
          </p>
          <h2 className="popup-title">MY SCHOOL</h2>

          <div className="form-group">
            <input type="text" placeholder="School Name" />
            <input type="email" placeholder="School Email" />
            <input type="tel" placeholder="School Phone" />
            <input type="text" placeholder="School Address" />
          </div>

          <button className="popup-button" onClick={() => setStep(2)}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="popup-box">
          <button className="back-btn" onClick={() => setStep(1)}>&larr;</button>
          <h2 className="popup-title">VERIFICATION CODE</h2>
          <p className="popup-subtitle">We Have Sent A Verification Code</p>
          <div className="code-inputs">
            {Array(4)
              .fill()
              .map((_, i) => (
                <input key={i} type="text" maxLength="1" className="code-box" />
              ))}
          </div>
          <button className="popup-button" onClick={() => setStep(3)}>
            Finish
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="popup-box success-popup">
          <button className="popup-close" onClick={() => setPopup(false)}>×</button>
          <div className="popup-icons">
            <img src="./img/logo1Color 20.svg" alt="logo" className="popup-logo" />
           <img src="https://twemoji.maxcdn.com/v/latest/svg/1f389.svg" width="64" height="64" alt="🎉" />
          </div>
          <p className="popup-success-text">Vous avez été enregistré avec succès</p>
          <button className="popup-button" onClick={() => setPopup(false)}>Start</button>
        </div>
      )}
    </div>
  );
}
