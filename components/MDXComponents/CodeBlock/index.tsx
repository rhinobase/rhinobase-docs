import { Box } from '@chakra-ui/react'
import theme from 'prism-react-renderer/themes/dracula';
import React from 'react'
import CodeContainer from './CodeContainer'
import CopyButton from './CopyButton'
import Highlight from './Highlight'

function CodeBlock(props: any) {

  const {
    className,
    children,
    viewlines,
    ln,
  } = props.children.props

  const language = className?.replace(/language-/, '')
  const rawCode = children.trim()

  return (
    <Box position='relative' zIndex='0'>
      <CodeContainer px='0' overflow='hidden'>
        <Highlight
          codeString={rawCode}
          language={language}
          theme={theme}
          metastring={ln}
          showLines={viewlines}
        />
        </CodeContainer>
      <CopyButton top='4' code={rawCode} />
    </Box>
  )
}

export default CodeBlock
