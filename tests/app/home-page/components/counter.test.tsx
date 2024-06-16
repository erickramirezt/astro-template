import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Counter } from '../../../../src/app/home-page/components/counter'

test('counter', async () => {
  const page = render(<Counter />)

  const user = userEvent.setup()

  const button = page.getByRole('button')
  await user.tripleClick(button)

  const result = button.innerHTML.includes('3')
  expect(result).toBeTruthy()
})
