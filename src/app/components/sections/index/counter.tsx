import { useState } from 'react'
import { Button } from '../../ui/button'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Button
      onClick={() => setCount((prev) => prev + 1)}
      className='text-white bg-blue-700 hover:bg-blue-800'
    >
      Clic here to increment {count}
    </Button>
  )
}
