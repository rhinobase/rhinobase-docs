import DefaultWrapper from "components/wrapper/DefaultWrapper";

export default function Home() {
  return <div>Home</div>;
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultWrapper>{page}</DefaultWrapper>;
};
