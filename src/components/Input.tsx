import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
      bg='gray.700' 
      borderWidth={0}
      color='white'
      fontFamily='body'
      fontSize='md'
      h={14} 
      placeholderTextColor='gray.300'
      size='md'
      _focus={{
        bg: 'gray.700',
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      {...rest}
    />
  );
}