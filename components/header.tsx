import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import Image from "next/image";
import { Github } from "lucide-react";
import { Section, Container } from "./craft";

export default function Header() {
  return (
    <nav>
      <Section>
        <Container className="flex justify-between">
          <Link className="flex font-black uppercase" href="/">
            <span className="sr-only">9D8</span>
            <Image
              width={25}
              height={25}
              src="/favicon.svg"
              alt="pool house"
            ></Image>
          </Link>
          <div className="flex items-center justify-center gap-4 md:gap-2">
            <ModeToggle />
          </div>
        </Container>
      </Section>
    </nav>
  );
}
