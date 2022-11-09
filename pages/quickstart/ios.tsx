import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function ios() {
  return <>ios</>
}
ios.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};