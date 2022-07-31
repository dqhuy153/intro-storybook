import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SignInForm, { SignInFormProps } from 'components/molecules/SignInForm'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export default {
  title: 'Form/SignIn',
  component: SignInForm,
  argTypes: {},
} as ComponentMeta<typeof SignInForm>

const Template: ComponentStory<typeof SignInForm> = args => (
  <SignInForm {...args} />
)

export const UI = Template.bind({})

export const FilledForm = Template.bind({})
FilledForm.play = async () => {
  const emailInput = screen.getByTestId('input-login-username')

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  })

  const passwordInput = screen.getByTestId('input-login-password')

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  })
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = screen.getByRole('button')

  await userEvent.click(submitButton)
}
