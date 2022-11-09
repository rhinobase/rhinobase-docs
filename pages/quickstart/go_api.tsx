import QuickstartWrapper from "components/wrapper/QuickstartWrapper";
export default function go_api() {
  return <>go_api</>
}
go_api.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};