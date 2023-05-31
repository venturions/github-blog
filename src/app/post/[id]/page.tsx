"use client";

import { getPost } from "@/api/posts";
import { PostInfoCard } from "@/components/PostInfoCard";
import { Post } from "@/types/posts";
import { useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface PostInfoProps {
  params: {
    id: string;
  };
}

export default function PostInfo({ params }: PostInfoProps) {
  const [post, setPost] = useState<Post>({} as Post);
  const [isLoadingPostData, setIsLoadingPostData] = useState(true);

  useEffect(() => {
    async function getPostData() {
      try {
        const postData = await getPost(params.id);
        setPost(postData);
        setIsLoadingPostData(true);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados do usuário:", error);
      }
    }
    getPostData();
  }, [params.id]);

  return (
    <section>
      <PostInfoCard postData={post} isLoadingPostData={isLoadingPostData} />
      <div className="flex flex-col items-center gap-6 px-8 py-10 text-base font-bold leading-normal text-base-text">
        <ReactMarkdown
          components={{
            code: ({ node, ...props }) => (
              <div
                style={{
                  display: "block",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: "2px",
                  gap: "8px",
                  background: "#112131",
                  padding: "16px",
                  whiteSpace: "pre-wrap",
                  overflowX: "auto",
                  width: "100%",
                }}
                {...props}
              />
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>
      </div>
    </section>
  );
}
