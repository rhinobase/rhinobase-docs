import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function python() {
  return <>python</>
}
python.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
