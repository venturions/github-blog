import { Post, IssuesPostData } from "@/types/posts";

export async function getPosts(onFinally?: () => void): Promise<Post[]> {
  try {
    const response = await fetch(
      "https://api.github.com/search/issues?q=repo:venturions/github-blog&sort=created&order=asc",
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

export async function getPost(
  id: string,
  onFinally?: () => void
): Promise<Post> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/venturions/github-blog/issues/${id}`,
      {
        cache: "no-store",
      }
    );
    const data: Post = await response.json();
    return data;
  } catch (error) {
    throw error;
  } finally {
    if (onFinally) {
      onFinally();
    }
  }
}
