import Header from "./DefaultWrapper/Header";

type WrapperProps = {
  children: JSX.Element;
};

export default function MinimalWrapper(props: WrapperProps) {
  return (
    <>
      <Header />
      <div className="pt-16  text-gray-800 dark:bg-gray-700 dark:text-white">
        {props.children}
      </div>
    </>
  );
}
