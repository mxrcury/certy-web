import Img from "next/image";

import { Logo } from "@/components/Logo/Logo";
import { H1, H3 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-[626px] m-auto my-auto h-[429px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-end">
          <Logo />
        </div>
        <div className="mt-[69px]">
          <H1>share</H1>
          <H1>your certificates</H1>
          <H1>with the world</H1>
          <Img src="/tree-emoji.svg" alt="tree" width={59} height={59} />
        </div>
        <div className="flex justify-end mt-[81px]">
          <Button className="px-[90px]">SHARE</Button>
        </div>
      </div>
    </div>
  );
}
