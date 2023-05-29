import { PostInfoCard } from "@/components/PostInfoCard";
import { PostInfoContent } from "@/components/PostInfoContent";
import { ProfileCard } from "@/components/ProfileCard";
import { PublicationCard } from "@/components/PublicationCard";
import { SearchBar } from "@/components/SearchBar";

export default function PostInfo() {
  return (
    <section>
      <PostInfoCard />
      <PostInfoContent />
      {/* <SearchBar /> */}
      {/* <div className="mb-6 mt-12 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:mx-4">
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </div> */}
    </section>
  );
}
