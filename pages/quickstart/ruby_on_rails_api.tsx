import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function ruby_on_rails_api() {
  return <>ruby_on_rails_api</>
}
ruby_on_rails_api.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};