import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function nextjs() {
  return <>nextjs</>
}
nextjs.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
