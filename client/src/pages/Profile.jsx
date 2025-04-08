import React from "react";
import { Link } from "react-router-dom";
import defaultPic from "../assets/my pic.jpg";
import './Profile.css'
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdCalendarToday,
  MdHistory
} from "react-icons/md";

const Profile = () => {
  const user = {
    name: "Tayyaba Abbas",
    email: "tayyaba@example.com",
    phone: "+123 456 7890",
    address: "123 Main St, City, Country",
    profilePic: defaultPic,
    role: "Data Scientist",
    bio: "Passionate about AI, computer vision, and building impactful solutions.",
    joined: "January 15, 2023",
    LastAnalysis: "March 30, 2025"
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Roboto', sans-serif"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
          User Profile
        </h1>
        <Link to="/EditProfile" className="edit-profile-link">
          <i className="fa fa-edit"></i> Edit Profile
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div style={{ marginRight: "30px" }}>
          <img
            src={user.profilePic}
            alt="Profile"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #343851"
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#333" }}>
            {user.name}
          </h2>
          <span
            style={{
              fontWeight: "bold",
              color: "#007bff",
              fontSize: "1rem"
            }}
          >
            {user.role}
          </span>
          <p style={{ fontSize: "0.95rem", color: "#555", marginTop: "5px" }}>
            {user.bio}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
            <p style={{ display: "flex", alignItems: "center", color: "#444" }}>
              <MdEmail style={{ marginRight: "8px", color: "#007bff" }} />
              {user.email}
            </p>
            <p style={{ display: "flex", alignItems: "center", color: "#444" }}>
              <MdPhone style={{ marginRight: "8px", color: "#007bff" }} />
              {user.phone}
            </p>
            <p style={{ display: "flex", alignItems: "center", color: "#444" }}>
              <MdLocationOn style={{ marginRight: "8px", color: "#007bff" }} />
              {user.address}
            </p>
            <p style={{ display: "flex", alignItems: "center", color: "#444" }}>
              <MdCalendarToday style={{ marginRight: "8px", color: "#007bff" }} />
              {user.joined}
            </p>
            <p style={{ display: "flex", alignItems: "center", color: "#444" }}>
              <MdHistory style={{ marginRight: "8px", color: "#007bff" }} />
              {user.LastAnalysis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
