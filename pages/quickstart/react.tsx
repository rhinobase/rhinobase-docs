import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function react() {
  return <>react</>
}
react.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
