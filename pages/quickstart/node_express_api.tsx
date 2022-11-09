import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function node_express_api() {
  return <>node_express_api</>
}
node_express_api.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
