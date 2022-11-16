import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

type InputProps = ChakraInputProps & {
  name: string
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    type,
    ...rest
  },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        type={type}
        focusBorderColor='pink.500'
        bg='gray.900'
        variant='filled'
        _hover={{
          bg: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
