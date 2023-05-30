"use client";

import { useEffect, useState } from "react";
import { fetchPostsData } from "@/api/posts";
import { fetchUserData } from "@/api/users";
import { ProfileCard } from "@/components/ProfileCard";
import { PublicationCard } from "@/components/PublicationCard";
import { SearchBar } from "@/components/SearchBar";
import { Post } from "@/types/posts";
import { User } from "@/types/users";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetchUserData();
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados do usuário:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await fetchPostsData();
        setPosts(postData);
        setIsLoading(false);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados dos posts:", error);
      }
    }
    fetchData();
  }, []);

  const filterByTitle = (searchValue: string) => {
    setSearchValue(searchValue);
    const lowercaseSearchValue = searchValue.toLowerCase();
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(lowercaseSearchValue)
    );
    setFilteredPosts(filtered);
  };

  return (
    <section>
      {!isLoading && (
        <>
          {user && <ProfileCard user={user} />}
          <SearchBar
            filterByTitle={filterByTitle}
            numberOfPosts={posts.length}
            searchValue={searchValue}
          />
          <div className="mb-6 mt-12 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:mx-4">
            {(filteredPosts.length >= 0 && searchValue.length > 0
              ? filteredPosts
              : posts
            ).map((post) => (
              <PublicationCard key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
