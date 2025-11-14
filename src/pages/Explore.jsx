import React from 'react';
import Hero2 from '../components/Hero2.jsx';
import FeaturedRestaurants from '../components/FeaturedRestaurants.jsx';
import FoodCategories from "../components/FoodCategories.jsx";
import TrendingNow from "../components/TrendingNow.jsx";
import ExploreByLocation from "../components/ExploreByLocation.jsx";
import FadeInSection from "../components/FadeInSection";
import BackToTop from '../components/BackToTop.jsx';

export default function Explore() {
  return (
    <div className="app space-y-16">
      <FadeInSection>
       <Hero2 />
      </FadeInSection>

      <FadeInSection delay={0.1}>
          <FeaturedRestaurants />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <FoodCategories />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <TrendingNow />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <ExploreByLocation />
      </FadeInSection>

      <BackToTop />
    </div>
  );
}


