import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile () {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Eduardo Gomes</Text>
        <Text color='gray.300' fontSize='small'>
          eduardogoomesf@gmail.com
        </Text>

      </Box>

      <Avatar
        size='md'
        name='Eduardo Gomes'
        src='https://github.com/eduardogomesf.png'
      />
    </Flex>
  )
}
