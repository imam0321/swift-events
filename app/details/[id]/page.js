import EventDetails from "@/components/Details/EventDetails/EventDetails";
import EventVenue from "@/components/Details/EventVenue/EventVenue";
import HeroSection from "@/components/Details/HeroSection/HeroSection";

export default function DetailsPage() {
  return (
    <>
      <HeroSection />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <EventVenue />
        </div>
      </section>
    </>
  );
}
