import { useTranslation } from 'react-i18next'

import cls from './PageError.module.scss'

const PageError = () => {
  const { t } = useTranslation()
  const onReload = () => {
    location.reload()
  }
  return (
    <div className={cls.PageError}>
      <h2 className={cls.ErrTitle}>{t('Что-то пошло не так')}</h2>
      <button onClick={onReload}>{t('Обновить страницу')}</button>
    </div>
  )
}

export default PageError
