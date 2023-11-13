import React from 'react'
import Logo from '../../assets/logo.svg'
import LogoMobile from '../../assets/logo-mobile.svg'

import cls from './Header.module.scss'
import { Link } from 'react-router-dom'
import { navMenu } from '../../constants'
import { MobileContext } from '../utils/MobileContextProvider'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { isMobileXs } = React.useContext(MobileContext)
  const { t, i18n } = useTranslation()

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru-RU' ? 'en-EN' : 'ru-RU')
  }

  return (
    <header className={cls.header}>
      <div className={cls.headerBlock}>
        <Link className={cls.logo} to="/">
          {isMobileXs ? <LogoMobile /> : <Logo />}
        </Link>
        <nav className={cls.headerNav}>
          {navMenu.map((el) => (
            <a className={cls.link} key={el.id} href={`#${el.id}`}>
              {t(el.title)}
            </a>
          ))}
        </nav>
      </div>
      <button className={cls.LanguageBtn} onClick={changeLang}>
        {t('Ru')}
      </button>
    </header>
  )
}

export default Header
