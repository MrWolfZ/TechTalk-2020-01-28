import * as React from 'react'
import { withActions } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Button',
  decorators: [withActions('mouseover', 'click')]
}

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

// export const withAction = () => <Button onClick={() => window.alert('Hello world')}>alert</Button>

// advanced date examples: https://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default
