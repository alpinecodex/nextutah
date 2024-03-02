import Link from "next/link";
import Image from "next/image";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";

// Logos
import ampry from "@/public/ampry.svg";
import alpine from "@/public/alpine.svg";

type PostCardProps = Post & {
  index: number;
};

type Sponsor = {
  name: string;
  url: string;
  logo: string;
};

const sponsors: Sponsor[] = [
  {
    name: "Vercel",
    url: "https://www.vercel.com",
    logo: "https://res.cloudinary.com/nextutah/image/upload/v1635517041/nextutah/vercel-logo.png",
  },
  {
    name: "Ampry",
    url: "https://ampry.com",
    logo: ampry,
  },
  {
    name: "Alpine Codex",
    url: "https://alpinecodex.com",
    logo: alpine,
  },
];

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Main className="pb-36 md:pb-48">
      <Section>
        <Intro />
        <NextEvent />
        <Container className="not-prose my-12 space-y-2">
          <h3 className="text-xl mb-8">About the Events</h3>
          {posts.map((post, idx) => (
            <PostCard key={idx} index={idx} {...post} />
          ))}
        </Container>
        <Sponsors />
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
      <h3 className="!mb-0 !text-lg">
        <Balancer>
          {"<"}NextUtah{"/>"} is a community of Next.js Developers located in
          Utah.{" "}
          <span className="opacity-50">
            We host events, workshops, and meetups to help developers grow and
            connect with others in the community.
          </span>{" "}
          <a href="https://tally.so/r/w51OKQ">Join us today!</a>
        </Balancer>
      </h3>
    </Container>
  );
};

const NextEvent = () => {
  return (
    <Container>
      <h3 className="sr-only">Our Next Event --{">"}</h3>
      <div className="flex max-w-3xl mt-8 md:mt-0 flex-col gap-2 not-prose border shadow-md rounded p-6 border-foreground">
        <h4 className="text-xl mb-2 text-orange-500">
          <span className="opacity-60 mr-2 hidden md:inline">#</span>
          {"<"}NextUtah{"/>"} KickOff -- March 21st @ 6 PM MST
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
        <p className="opacity-60 my-6">
          Come to the {"<"}NextUtah{"/>"} kickoff event on March 21st at 6 PM.
          Light snack and drinks will be provided. Learn about the App Router,
          using AI with NextJS, shadcn/ui, and more!{" "}
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          <Button asChild>
            <Link href="https://tally.so/r/w51OKQ">RSVP!</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/kickoff">Event info</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

const Sponsors = () => {
  return (
    <Container className="not-prose">
      <h3 className="text-xl mb-8">Thank you to our Sponsors</h3>
      <div className="flex gap-8">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            className="flex items-center justify-start hover:opacity-75 transition-opacity"
          >
            <Image
              className="h-12"
              width={96}
              height={96}
              src={sponsor.logo}
              alt={sponsor.name}
            />
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm opacity-75">
        Interested in becoming a sponsor? Email{" "}
        <a
          className="underline underline-offset-4"
          href="mailto:nextjsutah@gmail.com"
        >
          nextjsutah@gmail.com
        </a>
      </p>
    </Container>
  );
};

function PostCard({ index, ...post }: PostCardProps) {
  const date = new Date(post.date).getFullYear();
  return (
    <Link
      href={post.url}
      className="flex lowercase text-sm md:text-xl max-w-[500px] hover:border-b-accent border-b dark:border-b-accent dark:hover:border-b-white justify-between mr-2 gap-2"
    >
      <h2>
        <span className="text-base opacity-50">#</span> {post.title}
      </h2>
      <h2>{date}</h2>
    </Link>
  );
}
