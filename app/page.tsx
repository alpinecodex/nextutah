import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Main, Section, Container } from "craft-ds";

type PostCardProps = Post & {
  index: number;
};

function PostCard({ index, ...post }: PostCardProps) {
  const date = new Date(post.date).getFullYear();
  return (
    <Link
      href={post.url}
      className="flex lowercase text-xl md:text-base max-w-[500px] hover:border-b-[#0029FE] border-b dark:border-b-blue-400 dark:hover:border-b-white justify-between mr-2 gap-2"
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
        <div>
          <h2 className="mb-4">
            welcome to{" "}
            <span className="text-[#0029FE] dark:text-white">
              pool house studio
            </span>
          </h2>
          <p className="mb-24 text-base opacity-50">
            pool house is a design and development studio creating useful
            software and applications.
          </p>
        </div>
        <div className="space-y-2">
          {posts.map((post, idx) => (
            <PostCard key={idx} index={idx} {...post} />
          ))}
        </div>
      </Section>
    </Main>
  );
}
