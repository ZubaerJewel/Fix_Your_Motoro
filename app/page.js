import Hero from "@/components/Hero/Hero";
import NewsTips from "@/components/HomeSection/News/NewsTips";
import Review from "@/components/HomeSection/Review/Review";
import Services from "@/components/HomeSection/Services/Services";

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <Services/>
      <NewsTips/>
      <Review/>
      
    </main>
  );
};

export default HomePage;