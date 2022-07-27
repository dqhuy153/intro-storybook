import {
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaAngleLeft, FaAngleRight, FaCheck, FaTrash } from 'react-icons/fa'
import { getLoadingTodoList } from 'reducers/todo/selectors'
import { connect } from 'react-redux'
import {
  doDeleteTodo,
  setCompletedTodo,
  setInprogressTodo,
  setNotStartedTodo,
  Todo,
  TodoEnum,
} from 'reducers/todo'
import Badge, { BadgeVariant } from '../atoms/Badge'
import { IRootState } from 'reducers'

const ToDoList = ({
  data,
  type = 'todo',
  onDelete,
  onSetComplete,
  onSetInprogress,
  onSetNotStart,
}: ToDoListProps) => {
  let badgeVariant: BadgeVariant
  let badgeText: string
  let titleText: string
  let cardBackgroundColor

  switch (type) {
    case 'todo':
      badgeVariant = 'default'
      badgeText = 'No tasks!'
      titleText = 'TODO'
      cardBackgroundColor = 'orange.200'
      break
    case 'inprogress':
      badgeVariant = 'inprogress'
      badgeText = 'No inprogress tasks!'
      titleText = 'INPROGRESS'
      cardBackgroundColor = 'blue.100'
      break
    case 'completed':
      badgeVariant = 'success'
      badgeText = 'No completed tasks!'
      titleText = 'COMPLETED'
      cardBackgroundColor = 'green.100'
      break

    default:
      badgeVariant = 'default'
      badgeText = ''
      titleText = ''
      cardBackgroundColor = 'blue.100'
      break
  }

  const getBadge = () => {
    return (
      <Badge variant={badgeVariant} padding={4} borderRadiusSize={'lg'}>
        {badgeText}
      </Badge>
    )
  }

  return (
    <VStack spacing={8} w={'100%'}>
      <Flex fontWeight={'bold'} align='center' w={'100%'}>
        <Divider />
        <Text whiteSpace={'nowrap'} paddingLeft={'4'} paddingRight={'4'}>
          {titleText}
        </Text>
        <Divider />
      </Flex>
      {!data.length ? (
        getBadge()
      ) : (
        <VStack
          divider={<StackDivider />}
          borderColor={'gray.100'}
          borderWidth={'2px'}
          borderRadius={'lg'}
          p={'4'}
          w={'100%'}
          maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
          alignItems={'stretch'}
          backgroundColor={cardBackgroundColor}
        >
          {data.map(todo => (
            <HStack key={todo.id}>
              <Text fontWeight={'medium'} align={'left'}>
                {todo.content}
              </Text>
              <Spacer />
              {type === 'todo' && (
                <IconButton
                  icon={<FaAngleRight />}
                  isRound={true}
                  aria-label='Inprogress'
                  title='Inprogress'
                  onClick={() => onSetInprogress({ id: todo.id })}
                ></IconButton>
              )}
              {type === 'inprogress' && (
                <>
                  <IconButton
                    icon={<FaAngleLeft />}
                    isRound={true}
                    aria-label='Undo'
                    title='Undo'
                    onClick={() => onSetNotStart({ id: todo.id })}
                  ></IconButton>
                  <IconButton
                    icon={<FaCheck />}
                    isRound={true}
                    aria-label='Completed'
                    title='Completed'
                    onClick={() => onSetComplete({ id: todo.id })}
                  ></IconButton>
                </>
              )}
              {type === 'completed' && (
                <>
                  <IconButton
                    icon={<FaAngleLeft />}
                    isRound={true}
                    aria-label='Undo'
                    title='Undo'
                    onClick={() => onSetInprogress({ id: todo.id })}
                  ></IconButton>
                  <IconButton
                    icon={<FaTrash />}
                    isRound={true}
                    aria-label='Delete'
                    title='Delete'
                    onClick={() => onDelete({ id: todo.id })}
                  ></IconButton>
                </>
              )}
            </HStack>
          ))}
        </VStack>
      )}
    </VStack>
  )
}

export type ToDoListProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    type: 'todo' | 'inprogress' | 'completed' | TodoEnum
    data: Todo[]
  }

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {
  onSetComplete: setCompletedTodo,
  onSetInprogress: setInprogressTodo,
  onSetNotStart: setNotStartedTodo,
  onDelete: doDeleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
