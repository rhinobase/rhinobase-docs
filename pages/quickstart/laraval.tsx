import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function laraval() {
  return <>laraval</>;
  
}
laraval.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
