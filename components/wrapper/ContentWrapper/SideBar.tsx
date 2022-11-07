import { VStack, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'

export default function SideBar() {
  return (
    <VStack>
        <ButtonGroup variant="link">
        <Button>Getting Started</Button>
        <Button>Community</Button>
        <Button>Changelog</Button>
        <Button>Blog</Button>
        </ButtonGroup>
    </VStack>
  )
}
