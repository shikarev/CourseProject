import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  )
}

export { ProfileCard }
