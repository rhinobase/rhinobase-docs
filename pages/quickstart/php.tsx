import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function php() {
  return <>php</>
}
php.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
