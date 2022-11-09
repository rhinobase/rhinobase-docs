import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function java() {
  return <>java</>
}
java.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
