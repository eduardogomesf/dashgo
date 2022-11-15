import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && <Box mr='4' textAlign='right'>
        <Text>Eduardo Gomes</Text>
        <Text color='gray.300' fontSize='small'>
          eduardogoomesf@gmail.com
        </Text>

      </Box>}

      <Avatar
        size='md'
        name='Eduardo Gomes'
        src='https://github.com/eduardogomesf.png'
      />
    </Flex>
  )
}
