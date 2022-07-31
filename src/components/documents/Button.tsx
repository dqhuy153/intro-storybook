import { Code, List, ListItem, Stack, Text } from '@chakra-ui/react'
import Button from 'components/atoms/Button'
import React from 'react'

export const CustomDocumentationComponent: React.FC<{}> = () => {
  return (
    <div>
      <Text fontSize={25} fontWeight='bold'>
        Button
      </Text>
      <Text my={4}>
        Button component is used to trigger an action or event, such as
        submitting a form, opening a Dialog, canceling an action, or performing
        a delete operation.
      </Text>
      <Text fontSize={20} fontWeight='bold'>
        Import
      </Text>
      <Code
        display={'block'}
        p={8}
        my={4}
      >{`import { Button } from '@chakra-ui/react'`}</Code>
      <List m={6} listStyleType={'circle'}>
        <ListItem>
          <b>PinInput:</b> The component that provides context to all the
          pin-input fields.
        </ListItem>
        <ListItem>
          <b>PinInputField:</b> The text field that user types in - must be a
          direct child of PinInput.
        </ListItem>
      </List>
      <Text fontSize={20} mb={6} fontWeight='bold'>
        Usage
      </Text>
      <Button>Button</Button>
      <Code
        display={'block'}
        p={8}
        my={4}
      >{`<Button colorScheme='blue'>Button</Button>`}</Code>
      <Text fontSize={20} mb={6} fontWeight='bold'>
        Button Sizes
      </Text>
      <Text mb={6}>
        Use the size prop to change the size of the button. You can set the
        value to xs, sm, md, or lg.
      </Text>
      <Stack spacing={4} direction='row' align='center'>
        <Button colorScheme='teal' size='xs'>
          Button
        </Button>
        <Button colorScheme='teal' size='sm'>
          Button
        </Button>
        <Button colorScheme='teal' size='md'>
          Button
        </Button>
        <Button colorScheme='teal' size='lg'>
          Button
        </Button>
      </Stack>
      <Code display={'block'} whiteSpace='pre' p={8} my={4}>
        {`<Stack spacing={4} direction='row' align='center'>
  <Button colorScheme='teal' size='xs'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Button colorScheme='teal' size='lg'>
    Button
  </Button>
</Stack>`}
      </Code>
      <Text fontSize={20} mb={6} fontWeight='bold'>
        Button variants
      </Text>
      <Text mb={6}>
        Use the variant prop to change the visual style of the Button. You can
        set the value to solid, ghost, outline, or link.
      </Text>
      <Stack direction='row' spacing={4} align='center'>
        <Button variant='primary'>Button</Button>
        <Button variant='outline'>Button</Button>
        <Button variant='secondary'>Button</Button>
        <Button variant='success'>Button</Button>
        <Button variant='warning'>Button</Button>
        <Button variant='danger'>Button</Button>
      </Stack>
      <Code display={'block'} whiteSpace='pre' p={8} my={4}>
        {`<Stack direction='row' spacing={4} align='center'>
  <Button variant='primary'>Button</Button>
  <Button variant='outline'>Button</Button>
  <Button variant='secondary'>Button</Button>
  <Button variant='success'>Button</Button>
  <Button variant='warning'>Button</Button>
  <Button variant='danger'>Button</Button>
</Stack>`}
      </Code>
    </div>
  )
}
