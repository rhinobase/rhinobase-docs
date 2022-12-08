import MinimalWrapper from "../MinimalWrapper";
import Footer from "./Footer";

type WrapperProps = {
  children: JSX.Element;
};

export default function DefaultWrapper(props: WrapperProps) {
  return (
    <MinimalWrapper>
      <>
        {props.children}
        <div className="bg-transparent text-gray-800 dark:bg-gray-700 dark:text-white">
          <div className="container m-auto">
            <Footer />
          </div>
        </div>
      </>
    </MinimalWrapper>
  );
}
