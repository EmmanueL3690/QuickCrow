import React, { useState } from "react";
import { Pencil } from "lucide-react"; // For the edit icon
import "../styles/ProfilePage.css";

  import profile from '../assets/profile.jpg';

export default function Profile() {
  const [name, setName] = useState("Emmanuel Innocent");
  const [email, setEmail] = useState("emmanuel@example.com");
  const [address, setAddress] = useState("23 Food Street, Lagos");


  return (
    <div className="profile-container">
      {/* Top Section */}
      <div className="profile-header">
        <img
          src={profile}
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="profile-name">
          {name} <Pencil size={16} className="edit-icon" />
        </h2>
      </div>

      {/* Info Section */}
      <div className="profile-info-card">
        <h3>My Info</h3>

        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Address</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} />


        <button type="submit" className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}

