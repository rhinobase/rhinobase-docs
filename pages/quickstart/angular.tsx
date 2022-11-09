import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function angular() {
  return <>angular</>
}
angular.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
