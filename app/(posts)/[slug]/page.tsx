import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { GeistSans } from "geist/font/sans";
import { Separator } from "@/components/ui/separator";

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
      <section className="lg:container flex justify-center">
        <article
          className={`${GeistSans.className} not-italic py-6 prose dark:prose-invert font-light prose-headings:font-normal`}
        >
          <h1
            className={`${font.className} not-prose text-2xl dark:font-white mb-2`}
          >
            <span className="opacity-50 text-lg">#</span> {post.title}
          </h1>
          <Separator className="my-4 dark:bg-white" />
          <Mdx code={post.body.code} />
        </article>
      </section>
    </>
  );
}
