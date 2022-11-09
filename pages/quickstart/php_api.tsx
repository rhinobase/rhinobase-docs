import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function php_api() {
  return <>php_api</>
}

php_api.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
