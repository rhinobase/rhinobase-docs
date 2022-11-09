import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function android() {
  return <>android</>
}
android.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};