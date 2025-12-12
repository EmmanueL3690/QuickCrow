import HeroBanner from "../Home/HeroBanner";
import PromoCarousel from "../Home/PromoCarousel";
import LocationChip from "../Home/LocationChip"; // NEW
import FeaturedCategories from "../Home/FeaturedCategories";
import FeaturedRestaurants from "../Home/FeaturedRestaurants";
import FastDelivery from "../Home/FastDelivery";
import OrderAgain from "../Home/OrderAgain";
import Recommended from "../Home/Recommended";

export default function Home() {
  return (
    <div className="pb-20"> {/* to avoid overlap with bottom nav */}
      
      {/* HERO SECTION */}
      <div className="space-y-4 px-4">
        <HeroBanner />
        <LocationChip /> {/* NEW – to show user location */}
      </div>

      {/* PROMO SLIDER */}
      <div className="mt-6">
        <PromoCarousel />
      </div>

      {/* FAST DELIVERY */}
      <section className="mt-8 px-4">
        <FastDelivery />
      </section>

      {/* ORDER AGAIN */}
      <section className="mt-8 px-4">
        <OrderAgain />
      </section>

      {/* CATEGORIES */}
      <section className="mt-8 px-4">
        <FeaturedCategories />
      </section>

      {/* TOP RESTAURANTS */}
      <section className="mt-8 px-4">
        <FeaturedRestaurants title="Top Restaurants" />
      </section>

      {/* RECOMMENDED */}
      <section className="mt-8 px-4">
        <Recommended />
      </section>
    </div>
  );
}
