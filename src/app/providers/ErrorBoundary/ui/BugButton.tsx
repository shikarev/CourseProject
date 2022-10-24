import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

// компонент для тестирования
const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      onClick={onThrow}
    >
      {t('пробрость ошибку')}
    </Button>
  )
}

export { BugButton }
