"use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/api/posts";
import { getUsers } from "@/api/users";
import { ProfileCard } from "@/components/ProfileCard";
import { PublicationCard } from "@/components/PublicationCard";
import { SearchBar } from "@/components/SearchBar";
import { Post } from "@/types/posts";
import { User } from "@/types/users";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoadingPostsData, setIsLoadingPostsData] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function getUsersData() {
      try {
        const userData = await getUsers();
        setUser(userData);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados do usuário:", error);
      }
    }
    getUsersData();
  }, []);

  useEffect(() => {
    setIsLoadingPostsData(true);
    async function getPostsData() {
      try {
        const postData = await getPosts();
        setPosts(postData);
        setIsLoadingPostsData(false);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados dos posts:", error);
      }
    }
    getPostsData();
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
      <ProfileCard user={user} />
      <SearchBar
        isLoadingPostsData={isLoadingPostsData}
        filterByTitle={filterByTitle}
        numberOfPosts={posts.length}
        searchValue={searchValue}
      />
      <>
        {isLoadingPostsData ? (
          <div className="mx-4 mt-20 grid grid-cols-1">
            <Skeleton
              baseColor="#040F1A"
              highlightColor="#1C2F41"
              height={400}
              className=" animate-pulse"
              containerClassName="flex-1"
            />
          </div>
        ) : (
          <div className="mb-6 mt-12 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:mx-4">
            {(filteredPosts.length >= 0 && searchValue.length > 0
              ? filteredPosts
              : posts
            ).map((post) => (
              <PublicationCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </>
    </section>
  );
}
