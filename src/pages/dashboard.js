// Dashboard.js
import React from "react";
import { Bell, Video, Users, Clock, Settings, LogOut, LayoutDashboard, History, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
const [sidebarOpen, setSidebarOpen] = React.useState(false);
const [alertsOpen, setAlertsOpen] = React.useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}


     <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="school-name bold">COLLEGE MONGO BETI</div>
        <div className="school-address">
            <img src="./img/location Icon.svg" />
            Maroua, Rue 214 BP2001
        </div>

        <div className="admin-info">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="admin" className="admin-avatar" />
          <div>
            <div className="admin-name bold">Admin</div>
            <div className="admin-role">CHOUTEU Desmond</div>
          </div>
        </div>

        <nav className="nav-items">
          <NavItem icon={<LayoutDashboard enableBackground={"#333333"} size={18} />} label="Dashboard" active />
          <NavItem icon={<Video size={18} />} label="flux video" />
          <NavItem icon={<Users size={18} />} label="Persons" />
          <NavItem icon={<Bell size={18} />} label="Alerts" />
          <NavItem icon={<History size={18} />} label="Historique" />
          <NavItem icon={<Settings size={18} />} label="Parametre" />
        </nav>

        <div className="logout-section">
          <NavItem icon={<LogOut size={18} className="logout-icon" />} to={'/'} label="LOGOUT" red />
          <div className="faq-section">
             <img src="./img/logo-sans-fond 00.svg" />
            <NavItem icon={<Info size={18} />} label="FaQ" />
          </div>
         
        </div>
      </aside>

      {/* Main + Alerts */}
      <div className="main-content">

        <main className="main-panel">
          {/* Statistiques */}
           <h2 className="section-title bold">Status</h2>
          <section className="status-grid">
            <div className="grid grid1">
                <StatCard icon="👨‍🎓" label="Élèves inscrits" value="1200" />
                <StatCard icon="🧑‍🏫" label="Personnels" value="95" />
            </div>
            
            <div className="grid grid2">
                <StatCard icon="📹" label="Cameras installées" value="10" />
            <StatCard icon="🚨" label="Actes vandales" value="24" message={"cette semaine"}  />
             <StatCard icon="🚨" label="Actes vandales" value="24" message={"le mois dernier"}  />
            </div>
          </section>

          {/* Caméras */}
          <section className="camera-section">
            <div className="camera-header">
              <h2 className="section-title bold">camera flux</h2>
              <a href="#" className="voir-plus">Voir Plus</a>
            </div>
            <p className="fonc">10 caméras fonctionnelles</p>
            <div className="camera-grid">
              {[
                { name: "Camera 1", salle: "3eme A1", img: "https://images.unsplash.com/photo-1604079628041-9433b5b0f1e1" },
                { name: "Camera 2", salle: "3eme A1", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" },
                { name: "Camera 3", salle: "Bibliothèque 2", img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507" },
                { name: "Camera 4", salle: "Tle C", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" },
              ].map((cam, i) => (
                <div key={i} className="camera-card">
                  <img src={cam.img} alt="camera" className="camera-img" />
                  <div className="camera-overlay">
                    <div className="camera-meta">
                      <span>{cam.name}</span>
                      <span>{cam.salle}</span>
                    </div>
                    <div className="camera-date">21-06-2025 | 08:25 AM</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Alertes */}
        <aside className={`alerts-panel ${alertsOpen ? "open" : ""}`}>

          <div className="alerts-header">
            <h2 className="section-title bold">Alerts</h2>
            <div className="alert-buttons">
              <button className="btn-outline">Vandalisme</button>
              <button className="btn-filled">Violences</button>
            </div>
          </div>

          <div className="alerts-list">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="alert-card">
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="alert user" className="alert-avatar" />
                <div className="alert-info">
                  <div className=" side side1">
                  <div className="alert-name">Fatimatou Etba</div>
                  <div className="alert-class">3eme</div>
                  </div>
          <div className=" side side2">
                    <div className="alert-type">Violence</div>
                  <div className="alert-time">12h35mn</div>
          </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active, red, to }) => {
          const navigate = useNavigate();

  const handleClick = () => {
navigate(to);
  };

return  <div onClick={handleClick} className={`nav-item ${active ? "active" : ""} ${red ? "red" : ""}`}>
    {icon}
    <span className="nav-label">{label}</span>
  </div>
};

const StatCard = ({ icon, label, value, message }) => (
  <div className="stat-card">
    <div className="stat-icon">{icon}</div>
    <div className="stat-label">{label}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{message}</div>
  </div>
);

export default Dashboard;