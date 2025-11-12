import React from 'react';
import Hero2 from '../components/Hero2';
import FeaturedRestaurants from '../components/Featuredrestaurants';
import FoodCategories from "../components/FoodCategories";
import TrendingNow from "../components/TrendingNow";
import ExploreByLocation from "../components/ExploreByLocation";
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


