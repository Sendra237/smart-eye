import React from 'react';
import './dashboardmobile.css';
import { MapPin, Users, ShieldAlert, Bell, UserSquare, Home, LayoutGrid } from 'lucide-react';

const DashboardMobile = () => {
  return (
    <div className="dashboard-container2">
      

      {/* Header */}
      <div className="dashboard-header">
        <h1 className="greeting">Hello, Sendra</h1>
        <div className="bell-icon">
          <Bell className="icon" />
        </div>
      </div>

      {/* School Card */}
      <div className="school-card">
        <h2 className="school-name">College Privé Mongo Beti</h2>
        <p className="school-location">
          <img src="./img/location Icon.svg" /> Maroua, Rue 214 BP2001
        </p>
        <p className="school-stats">254 Eleves Inscrits</p>
        <p className="school-stats">25 personnels</p>
      </div>

      {/* Tabs */}
       <div className="tabs alert-buttons">
              <button className="btn-outline">Vandalisme</button>
              <button className="btn-filled">Violences</button>
            </div>
     

      {/* Cards Grid */}
      <div className="cards-grid">
        <div className="card">
          <div className="card-header">
            <Users className="card-icon" />
            <span>Eleves concernés</span>
          </div>
          <div className='divFlex'>
          <p className="card-number">21</p>
          <p className="card-subtext message">cette semaine</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <UserSquare className="card-icon" />
            <span>Personnel concerné</span>
          </div>
           <div className='divFlex'>
          <p className="card-number">8</p>
          <p className="card-subtext message">cette semaine</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <ShieldAlert className="card-icon" />
            <span>Nombre d’actes vandales</span>
          </div>
          <div className='divFlex'>
          <p className="card-number">24</p>
          <p className="card-subtext message">cette semaine</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <MapPin className="card-icon" />
           
          </div>
           <span className='add'>Address</span>
          <p className="card-subtext card-address">Mendong, Bp 8824</p>
        </div>
      </div>

      {/* Note */}
      <div className="availability-note">
        Systeme is available!
      </div>

      {/* Bottom Navbar */}
      <div className="bottom-navbar">
        <div className="navbar-button">
          <LayoutGrid className="navbar-icon" />
        </div>
        <div className="navbar-button">
          <ShieldAlert className="navbar-icon" />
        </div>
        <div className="navbar-button">
          <Home className="navbar-icon" />
        </div>
      </div>
    </div>
  );
};

export default DashboardMobile;