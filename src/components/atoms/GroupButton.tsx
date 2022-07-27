import { HStack, VStack } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { Callback } from 'utils/types'
import { IRootState } from '../../reducers'
import Button, { ButtonProps } from './Button'

const GroupButton = ({
  buttonProps,
  orientation = 'horizontal',
  onClick,
}: GroupButtonProps) => {
  return (
    <>
      {orientation === 'horizontal' && (
        <HStack onClick={onClick}>
          {buttonProps.map(buttonProp => (
            <Button {...buttonProp} />
          ))}
        </HStack>
      )}
      {orientation === 'vertical' && (
        <VStack onClick={onClick}>
          {buttonProps.map(buttonProp => (
            <Button {...buttonProp} />
          ))}
        </VStack>
      )}
    </>
  )
}

export type GroupButtonProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    buttonProps: ButtonProps[]
    orientation: 'vertical' | 'horizontal'
    onClick?: Callback
  }

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GroupButton)
