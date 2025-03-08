import EventList from "@/components/EventList/EventList";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <section className="container">
      <Header />
      <EventList />
    </section>
  );
}
