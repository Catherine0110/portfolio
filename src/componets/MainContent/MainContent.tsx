import { nanoid } from 'nanoid'
import MainImg from '../../assets/main-m.png'

import cls from './MainContent.module.scss'
import { paralaxSpeeds } from '../../constants'
import ParalaxItem from '../ui/ParalaxItem/ParalaxItem'
import { classNames } from '../utils/ClassNames'
import { useTranslation } from 'react-i18next'

const MainContent = () => {
  const { t } = useTranslation()
  return (
    <div className={cls.MainContent}>
      <div className={cls.MainContentText}>
        <h1 className={cls.title}>
          {t('Привет, я')}
          <span className={cls.titleColor}>{t('Екатерина')}</span>
        </h1>
        <p className={cls.text}>{t('Frontend разработчик')}</p>
        <a href="#contacts" className={cls.btn}>
          {t('Связаться')}
        </a>
      </div>
      <div className={cls.MainContentImg}>
        <img className={cls.img} src={MainImg} alt="main-img" />
        <div className={classNames(cls.blurImg, {}, [cls.blueBlur])}></div>
        <div className={classNames(cls.blurImg, {}, [cls.pinkBlur])}></div>
        <div className={classNames(cls.blurImg, {}, [cls.violetBlur])}></div>
        {paralaxSpeeds.map((paralaxEl, i) => (
          <ParalaxItem
            id={i}
            key={nanoid()}
            circle={!paralaxEl.icon}
            paralaxEl={paralaxEl}
            className={classNames(cls.paralaxEl, {}, [
              cls[paralaxEl.color || ''],
            ])}
          />
        ))}
      </div>
    </div>
  )
}

export default MainContent
