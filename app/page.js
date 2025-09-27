import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import CategoryStrip from '../components/CategoryStrip';
import TrendingGrid from '../components/TrendingGrid';
import ValueProps from '../components/ValueProps';
import PromoBanner from '../components/PromoBanner';
import Commitment from '../components/Commitment';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import DealOfTheWeek from '@/components/DealOfTheWeek';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <DealOfTheWeek />
        <CategoryStrip />
        <TrendingGrid />
        <ValueProps />
        <PromoBanner />
        <Commitment />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
