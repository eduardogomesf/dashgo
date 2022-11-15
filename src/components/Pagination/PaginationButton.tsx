import { Button } from '@chakra-ui/react'

type PaginationButtonProps = {
  number: string
  isCurrent?: boolean
}

export function PaginationButton ({ isCurrent = false, number }: PaginationButtonProps) {
  return isCurrent
    ? (<Button
      size='sm'
      fontSize='xs'
      w='4'
      colorScheme='pink'
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default'
      }}
    >
      {number}
    </Button>)
    : (<Button
      size='sm'
      fontSize='xs'
      w='4'
      bgColor='gray.700'
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>)
}
