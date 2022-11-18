import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const LoginForm = (props: LoginFormProps) => {
  const { className } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={classNames(cls.input)}
        placeholder={t('Введите username')}
      />

      <Input
        type="text"
        className={classNames(cls.input)}
        placeholder={t('Введите пароль')}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={classNames(cls.loginBtn)}
      >
        {t('Войти')}
      </Button>
    </div>
  )
}

export { LoginForm }
