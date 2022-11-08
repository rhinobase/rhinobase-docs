import Link from "next/link";

type SidebarProps = {
    children: JSX.Element;
    options: {
        header: string
        items: {
            title: string,
            href: string
        }[]
    }[]
}

export default function Sidebar(props:SidebarProps) {
  return (
    <Link href={""}></Link>
  )
}
