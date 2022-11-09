import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function go() {
  return <>go</>;
}
go.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
