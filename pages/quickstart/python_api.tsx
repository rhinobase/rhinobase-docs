import QuickstartWrapper from "components/wrapper/QuickstartWrapper";
export default function python_api() {
  return <>python_api</>
}
python_api.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
