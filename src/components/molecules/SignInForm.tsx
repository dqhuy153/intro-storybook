import { HStack, useToast, VStack } from '@chakra-ui/react'
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import { ReactNode, useState } from 'react'
import { connect } from 'react-redux'
import { Callback } from 'utils/types'
import { IRootState } from '../../reducers'

const SignInForm = ({ children, onClick }: SignInFormProps) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const toast = useToast()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!username || !password) {
      toast({
        title: 'You must enter username and password!',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })

      return
    }

    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack alignItems={'flex-end'}>
        <VStack>
          <Input
            data-testid='input-login-username'
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            data-testid='input-login-password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </VStack>
        <Button type='submit'>Sign In</Button>
      </HStack>
    </form>
  )
}

export type SignInFormProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    children: string | ReactNode
    onClick?: Callback
  }

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
