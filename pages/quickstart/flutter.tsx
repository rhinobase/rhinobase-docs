import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function flutter() {
  return <>flutter</>
}
flutter.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};