"use client";

import { fetchUserData } from "@/api/users";
import { ProfileCard } from "@/components/ProfileCard";
import { PublicationCard } from "@/components/PublicationCard";
import { SearchBar } from "@/components/SearchBar";
import { User } from "@/types/users";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then((res: User) => {
      setUser(res);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      {!loading && (
        <>
          <ProfileCard user={user} />
          <SearchBar />
          <div className="mb-6 mt-12 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:mx-4">
            <PublicationCard />
            <PublicationCard />
            <PublicationCard />
          </div>
        </>
      )}
    </section>
  );
}
