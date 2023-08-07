import { Hero } from "@/components/Section/HomeSection/Hero/Hero";
import NewsTips from "@/components/Section/HomeSection/News/NewsTips";
import Review from "@/components/Section/HomeSection/Review/Review";
import Services from "@/components/Section/HomeSection/Services/Services";
import OurExpert from "@/components/Section/HomeSection/OurExpert/OurExpert";


const HomePage = () => {
  return (
    <main>
      <Hero />
      <OurExpert/>
      <NewsTips />
      <Services />
      <Review />
    </main>
  );
};

export default HomePage;
