import React from 'react'
import SectionHead from '../SectionHead/SectionHead'
import { textVariant } from '../utils/motion'
import { aboutContent, aboutSkills } from '../../constants'
import SectionWrapper from '../utils/SectionWrapper'
import SkillCard from '../SkillCard/SkillCard'

import { motion } from 'framer-motion'
import { Scrollbar, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'

import cls from './About.module.scss'
import { MobileContext } from '../utils/MobileContextProvider'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const { isMobileXs } = React.useContext(MobileContext)
  return (
    <motion.div variants={textVariant(0)} className={cls.About}>
      <SectionHead title={t('О себе')} />
      <div className={cls.AboutContent}>
        <h2 className={cls.AboutTitle}>{t(aboutContent.title)}</h2>
        <p
          className={cls.AboutText}
          dangerouslySetInnerHTML={{ __html: `${t(aboutContent.text)}` }}></p>
      </div>
      <div className={cls.AboutSkills}>
        <Swiper
          modules={[Scrollbar, Mousewheel]}
          slidesPerView={'auto'}
          spaceBetween={isMobileXs ? 20 : 50}
          mousewheel={true}
          scrollbar={{ draggable: true }}>
          {aboutSkills.map((item) => (
            <SwiperSlide key={item.index}>
              <SkillCard item={item} theme={item.theme} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(About, 'about')
