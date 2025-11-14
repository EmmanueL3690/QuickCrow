import React from "react";
import ProfilePage from "../components/ProfilePage.jsx";
import FadeInSection from "../components/FadeInSection.jsx";

export default function Profile() {
  return (
    <div className="app">
      <FadeInSection>
        <ProfilePage />
      </FadeInSection>
    </div>
  );
}

