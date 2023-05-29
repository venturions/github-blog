import { ProfileCard } from "@/components/ProfileCard";
import { PublicationCard } from "@/components/PublicationCard";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <section>
      <ProfileCard />
      <SearchBar />
      <div className="mb-6 mt-12 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:mx-4">
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </div>
    </section>
  );
}
