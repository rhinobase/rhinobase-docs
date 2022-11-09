import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function ruby_on_rails() {
  return <>ruby-on-rails</>
}
ruby_on_rails.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
