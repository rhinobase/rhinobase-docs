import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function javascript() {
  return <>javascript</>
}
javascript.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
