import { Container } from "@chakra-ui/react"
import SideBar from "./SideBar"
import TableOfContent from "./TableOfContent"

type ContentWrapperProps = {
    children: JSX.Element
}

export default function ContentWrapper(props: ContentWrapperProps) {
  return (
    <>
    <SideBar></SideBar>
    <Container>{props.children}</Container>
    <TableOfContent></TableOfContent>
    </>
  )
}
