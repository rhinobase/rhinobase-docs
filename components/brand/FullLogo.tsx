import Logo, { LogoProps } from "./Logo";

type initialProps = {
  size?: string;
  logo?: LogoProps;
};

export default function FullLogo({ size, logo }: initialProps) {
  return (
    <>
      <div className="flex items-center">
        <Logo {...logo} />
        <h2 className="ml-3 text-4xl font-semibold leading-4">rhinobase</h2>
      </div>
    </>
  );
}
