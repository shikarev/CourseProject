import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test primary theme', () => {
    render(<Button theme={ThemeButton.PRIMARY}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('primary')
    screen.debug()
  })
})
