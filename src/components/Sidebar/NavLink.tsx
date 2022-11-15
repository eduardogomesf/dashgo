import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType
  children: string
}

export function NavLink ({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium' >{children}</Text>
    </Link>
  )
}
