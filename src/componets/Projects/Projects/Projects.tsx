import React from 'react'
import SectionHead from '../../SectionHead/SectionHead'
import Layout from '../../Layout/Layout'

import { motion } from 'framer-motion'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import cls from './Projects.module.scss'
import { projects } from '../../../constants'
import ProjectItem from '../ProjectItem/ProjectItem'
import { textVariant } from '../../utils/motion'
import SectionWrapper from '../../utils/SectionWrapper'
import { MobileContext } from '../../utils/MobileContextProvider'

const Projects = () => {
  const { isMobileXs } = React.useContext(MobileContext)
  return (
    <div className={cls.ProjectsWrap}>
      <Layout>
        <div className={cls.ProjectsInner}>
          <motion.div
            variants={textVariant(0)}
            className={cls.ProjectsInnerHead}>
            <SectionHead title="Portfolio" />
            <h2 className={cls.ProjectsTitle}>Projects</h2>
          </motion.div>
          <Swiper
            navigation={!isMobileXs}
            pagination={{ clickable: true }}
            className={cls.ProjectsSlider}
            modules={[Navigation, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              520: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}>
            {projects.map((project) => (
              <SwiperSlide key={project.id} className={cls.ProjectsSlide}>
                <ProjectItem item={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Layout>
    </div>
  )
}

export default SectionWrapper(Projects, 'projects')
