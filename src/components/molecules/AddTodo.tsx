import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { doAddTodo, TodoEnum } from '../../reducers/todo'

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [newValue, setNewValue] = useState('')
  const toast = useToast()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!newValue) {
      toast({
        title: 'You must enter your task!',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })

      return
    }

    const newTodo = {
      id: nanoid(),
      content: newValue,
      state: TodoEnum.TODO,
    }

    onAdd(newTodo)
    setNewValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mb={8}>
        <Input
          value={newValue}
          variant={'filled'}
          placeholder={'Add new task'}
          onChange={(e: any) => setNewValue(e.target.value)}
        ></Input>
        <Button colorScheme={'blue'} px={'8'} type={'submit'}>
          Submit
        </Button>
      </HStack>
    </form>
  )
}

export type AddTodoProps = typeof mapDispatchToProps & {}

const mapDispatchToProps = {
  onAdd: doAddTodo,
}

export default connect(null, mapDispatchToProps)(AddTodo)
