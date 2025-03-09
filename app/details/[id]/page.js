import EventDetails from "@/components/Details/EventDetails/EventDetails";
import EventVenue from "@/components/Details/EventVenue/EventVenue";
import HeroSection from "@/components/Details/HeroSection/HeroSection";
import { getEventById } from "@/db/queries";

export default async function EventDetailsPage({params: {id}}) {
  const eventInfo = await getEventById(id);
  return (
    <>
      <HeroSection eventInfo={eventInfo}/>
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags}/>
          <EventVenue location={eventInfo?.location}/>
        </div>
      </section>
    </>
  );
}
