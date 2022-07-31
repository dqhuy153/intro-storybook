import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { IRootState } from '../../reducers'

const Button = ({ label, variant = 'primary', ...props }: ButtonProps) => {
  const getButtonPropsByVariant = (variant: ButtonVariantType) => {
    switch (variant) {
      case 'primary':
        return {
          colorScheme: 'blue',
          variant: 'solid',
        }
      case 'secondary':
        return {
          colorScheme: 'gray',
          variant: 'solid',
        }
      case 'outline':
        return {
          colorScheme: 'blue',
          variant: 'outline',
        }
      case 'danger':
        return {
          colorScheme: 'red',
          variant: 'solid',
        }
      case 'warning':
        return {
          colorScheme: 'yellow',
          variant: 'solid',
        }
      case 'success':
        return {
          colorScheme: 'green',
          variant: 'solid',
        }

      default:
        break
    }
  }

  return (
    <ChakraButton
      px={4}
      py={4}
      borderRadius={8}
      cursor={'pointer'}
      {...getButtonPropsByVariant(variant)}
      {...props}
    >
      {label || props.children || 'Button'}
    </ChakraButton>
  )
}

export type ButtonVariantType =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'warning'
  | 'success'

export type ButtonProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  ChakraButtonProps & {
    label?: string
    variant?: ButtonVariantType
  }

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
