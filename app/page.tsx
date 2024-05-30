import Img from "next/image";

import { Logo } from "@/components/Logo/Logo";
import { H1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "@/constants/routes";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[calc(100vh_-_55px)]">
      <div className="flex-1 max-w-[574px]">
        <div className="flex justify-end">
          <Logo />
        </div>
        <div className="mt-[69px]">
          <H1>share your</H1>
          <H1>certificates</H1>
          <div className="flex">
            <H1>with the world</H1>
            <Img src="/tree-emoji.svg" alt="tree" width={59} height={59} />
          </div>
        </div>
        <div className="ml-auto flex justify-end mt-[81px]">
          <Link href={routes.signUp}>
            <Button className="px-[70px]">SHARE</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
