import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { GeistSans } from "geist/font/sans";
import { Separator } from "@/components/ui/separator";
import { Section, Container } from "@/components/craft";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

import { Instrument_Serif } from "next/font/google";

const font = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

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
    <>
      <Section>
        <Container>
          <article
            className={`${GeistSans.className} not-italic py-6 prose dark:prose-invert font-light prose-headings:font-normal`}
          >
            <h1>{post.title}</h1>
            <Mdx code={post.body.code} />
          </article>
        </Container>
      </Section>
    </>
  );
}
