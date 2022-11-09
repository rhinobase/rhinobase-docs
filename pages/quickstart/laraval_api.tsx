import QuickstartWrapper from "components/wrapper/QuickstartWrapper";
export default function laraval_api() {
  return <>laraval_api</>
}
laraval_api.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
