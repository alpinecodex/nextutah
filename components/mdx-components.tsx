import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Button } from "./ui/button";
import Link from "next/link";

const components = {
  // https://github.com/hashicorp/next-mdx-remote/issues/405
  Image: (props: React.ComponentProps<typeof Image>) => (
    <Image {...props} alt={props.alt} />
  ),

  Button: (
    props: React.ComponentProps<"button"> & { asChild?: boolean; href: string }
  ) => {
    const { asChild, children, href, ...rest } = props;
    if (asChild) {
      return (
        <Button className="not-prose mt-8">
          <Link href={href}>{children}</Link>
        </Button>
      );
    }
    return <button {...props} className="button" />;
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
