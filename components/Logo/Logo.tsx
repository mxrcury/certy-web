import { H2 } from "@/components/ui/typography";

interface ILogoProps {
  className?: string;
}

export const Logo = ({ className }: ILogoProps): JSX.Element => {
  return (
    <div className={className} >
      <div className="relative">
        <div
          className={
            "relative w-[100px] h-[50px] rounded-2xl bg-black blur-2xl opacity-40"
          }
        />
        <div className="absolute top-[8px] left-[1px] text-xl font-bold text-black">
          <H2 className="text-[40px]">certy</H2>
        </div>
      </div>
    </div>
  );
};
