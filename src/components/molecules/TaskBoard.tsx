import { Divider, HStack, Spinner } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { IRootState } from 'reducers'
import {
  getCompletedList,
  getInprogressList,
  getLoadingTodoList,
  getTodosList,
} from 'reducers/todo/selectors'
import ToDoList from './ToDoList'

const TaskBoard = ({
  loading,
  todoData,
  inprogressData,
  completedData,
}: TaskBoardProps) => {
  if (loading) {
    return <Spinner />
  }

  return (
    <HStack alignItems={'flex-start'} minW={'70vw'}>
      <ToDoList type='todo' data={todoData} />
      <Divider orientation='vertical' />
      <ToDoList type='inprogress' data={inprogressData} />
      <Divider orientation='vertical' />
      <ToDoList type='completed' data={completedData} />
    </HStack>
  )
}

export type TaskBoardProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {}

const mapStateToProps = (state: IRootState) => ({
  loading: getLoadingTodoList(state.todoState),
  todoData: getTodosList(state.todoState),
  inprogressData: getInprogressList(state.todoState),
  completedData: getCompletedList(state.todoState),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
