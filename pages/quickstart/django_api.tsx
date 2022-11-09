import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function django_api() {
  return <>django_api</>
}
django_api.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
