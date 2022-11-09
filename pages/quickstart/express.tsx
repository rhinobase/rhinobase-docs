import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function express() {
  return <>express</>
}

express.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
