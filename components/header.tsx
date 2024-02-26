import Link from "next/link";
import { Button } from "./ui/button";
// import { ModeToggle } from "./theme-toggle";
import Image from "next/image";
import { Section, Container } from "./craft";
import discord from "@/public/discord.svg";

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
              src="/logo.svg"
              alt="next utah logo"
            ></Image>
          </Link>
          <div className="flex items-center justify-center gap-4 md:gap-2">
            <Button asChild variant="outline">
              <a href="https://discord.gg/jkAfzsNT">
                <Image alt="discord" src={discord} className="w-4 h-4"></Image>
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://tally.so/r/w51OKQ">Join now</a>
            </Button>
            {/* <ModeToggle /> */}
          </div>
        </Container>
      </Section>
    </nav>
  );
}
