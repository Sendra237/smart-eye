import React from "react";

export default function LoginPage() {
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="login-box">
          <div className="logo-container">
            <img src="./img/logo-sans-fond 00.svg" alt="Logo" className="logo" />
          </div>
          <h2 className="login-title">LOGIN</h2>

          <form className="login-form">
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />

            <div className="remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>

            <button type="submit" className="btn-continue">
              Continue
            </button>
          </form>

          <div className="login-with">Login With</div>
          <div className="social-icons">
            <img src="./img/Vector.svg" alt="Facebook" />
            <img src="./img/google icon.svg" alt="Google" />
            <img src="./img/Group.svg" alt="Apple" />
          </div>

          <div className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img src="./img/logo1Color 20.svg" alt="Eye Background" className="background-image" />

        <div className="right-content">
          <div className="info-box2">
            <h3 className="coll">Smart Eye Control</h3>
            <h2>Welcome to Smart Eye Control</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor wewgfw wlf vel sagittis cras morbi porta quis enim feugiat pellentesque. # Fermentum tincidunt eu sed orci.
            </p>
            <p className="small">Plus de 18 établissement nous ont choisit</p>
          </div>

          <div className="info-box">
            <h2>Securiser Votre Etablissement Des Maintenant</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor wewg vel sagittis cras morbi porta quis enim feugiat pellene
            </p>
            <div className="color-dots">
              <span className="dot dot1" />
              <span className="dot dot2" />
              <span className="dot dot3" />
              <span className="dot dot4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}