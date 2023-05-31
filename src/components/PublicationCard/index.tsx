import { Post } from "@/types/posts";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
interface PublicationCardProps {
  post: Post;
}

export function PublicationCard({ post }: PublicationCardProps) {
  return (
    <Link href="/post/[id]" as={`post/${post.number}`}>
      <div className="h-64 w-full rounded-lg border-2 border-transparent bg-base-post p-8 hover:cursor-pointer hover:border-2 hover:border-solid hover:border-base-label">
        <div className="flex justify-between gap-4">
          <h1 className="line-clamp-2 overflow-ellipsis text-xl font-bold leading-normal text-base-title">
            {post?.title}
          </h1>
          <span className="mt-1 min-w-fit text-sm leading-normal text-base-span max-xs:hidden">
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <div className="mt-5">
          <p className="line-clamp-4 h-24 overflow-ellipsis text-base leading-normal text-base-text">
            {post?.body}
          </p>
        </div>
      </div>
    </Link>
  );
}
