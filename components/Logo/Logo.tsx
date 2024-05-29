import { H3 } from "@/components/ui/typography";

interface ILogoProps {
  className?: string;
}

export const Logo = ({ className }: ILogoProps): JSX.Element => {
  return <H3 className={className}>certy</H3>;
};
