import { Post, IssuesPostData } from "@/types/posts";

export async function fetchPostsData(onFinally?: () => void): Promise<Post[]> {
  try {
    const response = await fetch(
      "https://api.github.com/search/issues?q=repo:venturions/github-blog",
      {
        cache: "no-store",
      }
    );
    const data: IssuesPostData = await response.json();
    return data.items;
  } catch (error) {
    throw error;
  } finally {
    if (onFinally) {
      onFinally();
    }
  }
}
