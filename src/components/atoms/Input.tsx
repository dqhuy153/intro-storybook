import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { IRootState } from '../../reducers'

const Input = ({ ...props }: InputProps) => {
  return <ChakraInput {...props} />
}

export type InputProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  ChakraInputProps & {}

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
