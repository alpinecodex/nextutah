import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

type PostCardProps = Post & {
  index: number;
};

function PostCard({ index, ...post }: PostCardProps) {
  const date = new Date(post.date).getFullYear();
  return (
    <Link
      href={post.url}
      className="flex lowercase text-xl md:text-base max-w-[500px] hover:border-b-accent border-b dark:border-b-accent dark:hover:border-b-white justify-between mr-2 gap-2"
    >
      <h2>
        <span className="text-base opacity-50">#</span> {post.title}
      </h2>
      <h2>{date}</h2>
    </Link>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Main>
      <Section>
        <Container>
          <h1 className="mb-4 font-sans">welcome to next utah</h1>
          <h4>
            next utah is a community of Next.js Developers located in the Utah.
            We host events, workshops, and meetups to help developers grow and
            connect with others in the community. Join us today!
          </h4>
          <p className="mb-24 text-base opacity-50">
            pool house is a design and development studio creating useful
            software and applications.
          </p>
        </Container>
        <Container className="not-prose my-12 space-y-2">
          {posts.map((post, idx) => (
            <PostCard key={idx} index={idx} {...post} />
          ))}
        </Container>
      </Section>
    </Main>
  );
}
