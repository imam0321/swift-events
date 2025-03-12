import EventList from "@/components/EventList/EventList";
import Header from "@/components/Header/Header";
import Loading from "@/components/Loading/Loading";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}
