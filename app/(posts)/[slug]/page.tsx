import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Section, Container, Article } from "@/components/craft";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, description: post?.description };
};

export default async function PostPage({ params }: PostProps) {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-36">
      <Section>
        <Container>
          <article
            className={`not-italic py-6 prose dark:prose-invert font-light prose-headings:font-normal`}
          >
            <h1>{post.title}</h1>
            <Mdx code={post.body.code} />
          </article>
        </Container>
      </Section>
    </div>
  );
}
