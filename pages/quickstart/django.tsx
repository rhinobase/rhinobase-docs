import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function django() {
  return <>Django</>;
}

django.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
