import Image from "next/image";
import rhinobaseLogo from "../../public/rhinobase_logo.png";

export default function Logo() {
  return (
    <>
      <div
        className="flex h-[35px] w-[35px] items-center justify-center rounded-md"
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
