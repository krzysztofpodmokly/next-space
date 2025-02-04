// export const dynamic = "force-dynamic";
// export const revalidate = 420;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

// ISR
export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;

  const posts: Post[] = await fetch("http://localhost:3000/api/content", {
    cache: "no-cache",
  }).then((res) => res.json());

  const post = posts.find((post) => post.slug === slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
