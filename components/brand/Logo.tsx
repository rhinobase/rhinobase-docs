import Image from "next/image";
import rhinobaseLogo from "../../public/rhinobase_logo.png";

export type LogoProps = {
  size?: number;
  borderRadius?: string;
  p?: number;
};

export default function Logo({ size, borderRadius, p }: LogoProps) {
  return (
    <>
      <div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-md"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #76E4F7, #0078FF, #D53F8C, #DD6B20)",
        }}
      >
        <Image
          src={rhinobaseLogo}
          alt="rhinobase"
          className="h-[80%] w-[80%]"
        />
      </div>
    </>
  );
}
