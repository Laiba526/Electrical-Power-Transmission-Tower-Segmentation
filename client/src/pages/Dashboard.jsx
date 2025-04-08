import React from "react";
import Sidebar from '../components/ui/Sidebar';  // Change 'Sidebar.jsx' → 'sidebar'
import "../styles/Cardsection.css";  
import "../styles/recentactivity.css"; // Change 'RecentActivity.css' → 'recentactivity.css'
import AnalysisIcon from '../assets/analysis-left-svgrepo-com.svg';
import RecentUploads from '../assets/upload-svgrepo-com (1).svg';
import "./Dashboard.css";
import Navbar from "../components/ui/Navbar";  // Import Navbar
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/prediction-result");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <Navbar /> {/* Place Navbar at the top of the page */}

      {/* Main content container */}
      <div style={{ display: "flex", marginTop: "60px" }}> {/* Adjust margin-top to avoid overlap with Navbar */}
        {/* Sidebar only on Dashboard */}
        <Sidebar />
        
        {/* Main content */}
        <div style={{ flex: 1, paddingLeft: "290px", paddingTop: "60px" }}>
          <div className="dashboard-content">
            {/* Cards Section */}
            <div className="analytics-container">
              <div className="analytics-header">
                <h1>Analytics</h1>
              </div>

              <div className="analytics-cards">
                <div className="analytics-card">
                  <div className="card-content">
                    <div className="card-icon-title">
                      <img src={AnalysisIcon} alt="icon" className="card-icon" />
                      <span>Total Analysis</span>
                    </div>
                    <div className="card-count">100</div>
                  </div>
                </div>

                <div className="analytics-card">
                  <div className="card-content">
                    <div className="card-icon-title">
                      <img src={RecentUploads} alt="icon" className="card-icon" />
                      <span>Recent Uploads</span>
                    </div>
                    <div className="card-count">50</div>
                  </div>
                </div>
             </div>
            </div>

            {/* Table Section */}
            <div className="recent-uploads-container">
              <h2 className="recent-uploads-title">Recent Uploads</h2>
              <div className="uploads-table-scroll">
                  <table className="recent-uploads-table">
                    <thead>
                      <tr>
                       <th>Date</th>
                       <th>Description</th>
                       <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td>Mar 30, 2025</td>
                        <td>Segmented urban landscape image with masks</td>
                        <td><i className="fa fa-eye view-icon" onClick={handleViewClick}
                             style={{ cursor: "pointer" }}></i>
                        </td>
                       </tr>
                       <tr>
                        <td>Mar 29, 2025</td>
                        <td>Processed satellite image for forest density</td>
                        <td><i className="fa fa-eye view-icon" onClick={handleViewClick}
                             style={{ cursor: "pointer" }}></i>
                        </td>
                       </tr>
                       <tr>
                        <td>Mar 28, 2025</td>
                        <td>Object detection report on highway frames</td>
                        <td><i className="fa fa-eye view-icon" onClick={handleViewClick}
                             style={{ cursor: "pointer" }}></i>
                        </td>
                       </tr>
                       <tr>
                        <td>Mar 29, 2025</td>
                        <td>Processed satellite image for forest density</td>
                        <td><i className="fa fa-eye view-icon" onClick={handleViewClick}
                             style={{ cursor: "pointer" }}></i>
                        </td>
                       </tr>
                       <tr>
                        <td>Mar 29, 2025</td>
                        <td>Processed satellite image for forest density</td>
                        <td><i className="fa fa-eye view-icon" onClick={handleViewClick}
                             style={{ cursor: "pointer" }}></i>
                        </td>
                       </tr>
                       <tr>
                        <td>Mar 29, 2025</td>
                        <td>Processed satellite image for forest density</td>
                        <td><i className="fa fa-eye view-icon" onClick={handleViewClick}
                             style={{ cursor: "pointer" }}></i>
                        </td>
                       </tr>
                    {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
