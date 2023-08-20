import React from 'react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function ProjectLink() {
  return (
    <div>
      <Link href='https://chakra-ui.com' isExternal>
      Chakra Design system <ExternalLinkIcon mx='2px' />
      </Link>
    </div>
  )
}
