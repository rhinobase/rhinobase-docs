import Sidebar from "components/wrapper/Sidebar";
import sitemap from "sitemap.json";

export default function Sdks() {
  return (
    <Sidebar options={sitemap[3].items ?? []}>
      <div className="container"></div>
    </Sidebar>
  );
}
