import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />

      <div className={cls.inputWrapper}>
        <Input
          type="text"
          className={classNames(cls.input)}
          placeholder={t('Введите username')}
          onChange={onChangeUsername}
          value={username}
        />

        <Input
          type="text"
          className={classNames(cls.input)}
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
        />
      </div>

      <div className={cls.ErrorWrapper}>
        {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
      </div>

      <Button
        theme={ButtonTheme.OUTLINE}
        className={classNames(cls.loginBtn)}
        disabled={isLoading}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})

export { LoginForm }
