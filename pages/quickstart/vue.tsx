import QuickstartWrapper from "components/wrapper/QuickstartWrapper";
export default function vue() {
  return <>vue</>
}
vue.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};