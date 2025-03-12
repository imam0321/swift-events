import EventList from "@/components/EventList/EventList";
import Header from "@/components/Header/Header";

export default function Home({searchParams: {query}}) {
  return (
    <section className="container">
      <Header />
      <EventList query={query}/>
    </section>
  );
}
