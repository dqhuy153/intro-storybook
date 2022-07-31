import React, { Fragment, useEffect } from 'react'
import {
  Badge,
  Box,
  ChakraProvider,
  extendTheme,
  Grid,
  Heading,
  VStack,
} from '@chakra-ui/react'
import AddTodo from '../molecules/AddTodo'
import { getInitialColorMode } from '../../reducers/theme/selectors'
import { connect } from 'react-redux'
import { getTodoError } from '../../reducers/todo/selectors'
import { doFetchMockTodo, doSetTodos, Todo } from '../../reducers/todo'
import { IRootState } from '../../reducers'
import TaskBoard from 'components/molecules/TaskBoard'
import { ColorModeSwitcher } from 'components/atoms/ColorModeSwitcher'

const imageUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23005dff' fill-opacity='0.05'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

const App = ({
  error,
  themeState,
  onFetch,
  storybookData,
  onSetTodos,
}: Props) => {
  useEffect(() => {
    storybookData ? onSetTodos(storybookData) : onFetch(null)
  }, [storybookData])

  const config = {
    initialColorMode: getInitialColorMode(themeState),
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign='center'
        fontSize='lg'
        style={{
          backgroundImage: 'url("' + imageUrl + '")',
        }}
        minH={'96vh'}
      >
        <Grid p={3}>
          <ColorModeSwitcher aria-label='' justifySelf='flex-end' />
          <VStack spacing={8}>
            <Heading
              mt={'8'}
              mb={'8'}
              fontWeight={'extrabold'}
              size={'2xl'}
              bgGradient={'linear(to-r, blue.500, blue.300, green.500)'}
              bgClip={'text'}
            >
              Jira 2.0
            </Heading>

            {error ? (
              <Badge colorScheme={'red'} p={'4'} borderRadius={'lg'}>
                {error}
              </Badge>
            ) : (
              <>
                <AddTodo />
                <TaskBoard />
              </>
            )}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    storybookData?: Todo[]
  }

const mapStateToProps = (state: IRootState) => ({
  themeState: state.themeState,
  error: getTodoError(state.todoState),
})

const mapDispatchToProps = {
  onFetch: doFetchMockTodo,
  onSetTodos: doSetTodos,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
