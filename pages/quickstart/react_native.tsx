import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function react_native() {
  return <>react_native</>
}
react_native.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};