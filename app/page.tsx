import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";

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
        <Intro />
        <Container>
          <h3>Our Next Event --{">"}</h3>
          <div className="flex max-w-3xl flex-col gap-2 bg-accent not-prose border shadow-md rounded p-6 border-foreground">
            <h4 className="text-xl mb-2 text-orange-500">
              <span className="opacity-60 mr-4">#</span>Event 00 -- March 14th @
              6 PM MST
            </h4>
            <p>
              {"> "}Location:{" "}
              <a
                className="underline underline-offset-4"
                href="https://maps.app.goo.gl/WKM2vhggQKwh4B1f9"
              >
                519 W State St #201, Pleasant Grove, UT 84062
              </a>
            </p>
            <p className="opacity-60">
              Come to the {"<"}NextUtah{"/>"} kickoff event on March 14th at 6
              PM. Food and drinks will be provided. Learn about the App Router,
              using AI with NextJS, shadcn/ui, and more!{" "}
            </p>
            <Button asChild>
              <Link href="/">Speakers and </Link>
            </Button>
            <Button asChild>
              <Link href="/">RSVP for Free!</Link>
            </Button>
          </div>
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

const Intro = () => {
  return (
    <Container>
      <h1 className="mb-4">
        {"<"}NextUtah{"/>"}
      </h1>
      <h4 className="!mb-0">
        <Balancer>
          {"<"}NextUtah{"/>"} is a community of Next.js Developers located in
          the Utah.{" "}
          <span className="opacity-50">
            We host events, workshops, and meetups to help developers grow and
            connect with others in the community.
          </span>{" "}
          <a href="">Join us today!</a>
        </Balancer>
      </h4>
    </Container>
  );
};
