import React from 'react';
import Hero from '../components/Hero.jsx';
import CategorySlider from '../components/CategorySlider.jsx';
import FeatureCards from '../components/Feature.jsx';
import RestaurantCards from '../components/RestarantCard.jsx';
import NewRestaurants from '../components/NewRestaurants.jsx';
import BackToTop from '../components/BackToTop.jsx';
import FadeInSection from "../components/FadeInSection.jsx";

export default function Home() {
  return (
    <div className="app space-y-16">
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <CategorySlider />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <RestaurantCards />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <FeatureCards />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <NewRestaurants />
      </FadeInSection>
      
      <BackToTop />
    </div>
  );
}



