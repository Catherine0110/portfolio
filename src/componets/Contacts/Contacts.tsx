import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import EarthCanvas from '../Earth/Earth'
import SectionWrapper from '../utils/SectionWrapper'
import SectionHead from '../SectionHead/SectionHead'

import cls from './Contacts.module.scss'
import FormEl from '../Form/Form'
import { slideIn } from '../utils/motion'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className={cls.Contacts}>
      <SectionHead title={t('Контакты')} />
      <div className={cls.ContactsWrap}>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className={cls.ContactsFormWrap}>
          <FormEl
            placeholderArea={t('Сообщение')}
            placeholderMail={t('Почта')}
            placeholderName={t('Имя')}
            title={t('Связаться ')}
          />
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className={cls.Earth}>
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contacts')
