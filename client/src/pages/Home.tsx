import { Helmet } from 'react-helmet';
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import FeaturedVendors from "@/components/home/FeaturedVendors";
import VisitInfo from "@/components/home/VisitInfo";
import EventsSection from "@/components/home/EventsSection";
import ContactNewsletter from "@/components/home/ContactNewsletter";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Miramar Food Hall | San Clemente, CA</title>
        <meta name="description" content="Miramar Food Hall - San Clemente's premier oceanfront dining experience featuring 15 food vendors and 2 bars. Opening Summer 2025." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;600&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      <Hero />
      <Introduction />
      <FeaturedVendors />
      <VisitInfo />
      <EventsSection />
      <ContactNewsletter />
    </>
  );
};

export default Home;
