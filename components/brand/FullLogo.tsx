import Logo from "./Logo";

export default function FullLogo() {
  return (
    <>
      <div className="flex items-center">
        <Logo />
        <h2 className="ml-3 text-2xl font-semibold  leading-4 md:text-3xl">
          rhinobase
        </h2>
      </div>
    </>
  );
}
