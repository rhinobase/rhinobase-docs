import Sidebar from "./Sidebar";
import sitemap from "sitemap.json";
import MinimalWrapper from "./MinimalWrapper";

type WrapperProps = {
  children: JSX.Element;
};

export default function QuickstartWrapper(props: WrapperProps) {
  return (
    <MinimalWrapper>
      <Sidebar options={sitemap[1].items ?? []}>{props.children}</Sidebar>
    </MinimalWrapper>
  );
}
