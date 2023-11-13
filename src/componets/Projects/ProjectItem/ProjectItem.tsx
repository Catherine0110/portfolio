import React from 'react'
import { motion } from 'framer-motion'

import cls from './ProjectItem.module.scss'
import { classNames } from '../../utils/ClassNames'
import { fadeIn } from '../../utils/motion'
import { Tilt } from 'react-tilt'
import { useTranslation } from 'react-i18next'

interface IItemTexhnologies {
  color: string
  text: string
}

export interface IItem {
  id: number
  img?: string
  icon?: string
  title: string
  text: string
  role?: string[]
  technologies: IItemTexhnologies[]
  href: string
  subtext?: string
}

interface ProjectItemProps {
  item: IItem
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  const { t } = useTranslation()
  return (
    <motion.a
      variants={fadeIn('up', 'spring', item.id * 0.5, 0.75)}
      href={item.href}
      target="_blank"
      className={cls.ProjectItemLink}>
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 300,
        }}
        className={cls.ProjectItem}>
        {item.icon ? (
          <div className={cls.ProjectItemSvgWrap}>
            <div className={cls.ProjectItemSvg}>
              <item.icon />
            </div>
          </div>
        ) : (
          <div className={cls.ProjectItemImg}>
            <img
              loading="lazy"
              src={item.img}
              className={cls.ProjectItemImage}
            />
          </div>
        )}
        <div className={cls.ProjectItemContent}>
          <h3 className={cls.ProjectItemTitle}>{item.title}</h3>
          <p className={cls.ProjectItemText}>{t(item.text)}</p>
          {item.subtext && (
            <span className={cls.ProjectItemSubText}>{t(item.subtext)}</span>
          )}
          {item.role && (
            <ul className={cls.ProjectItemRoles}>
              {item.role.map((el) => (
                <li key={el} className={cls.ProjectItemRole}>
                  <span className={cls.ProjectItemRoleText}>{el}</span>
                </li>
              ))}
            </ul>
          )}
          <ul className={cls.ProjectItemTechnologies}>
            {item.technologies.map((tech) => (
              <li
                key={tech.color}
                className={classNames(cls.ProjectItemTechnology, {}, [
                  cls[tech.color],
                ])}>
                #{tech.text}
              </li>
            ))}
          </ul>
        </div>
      </Tilt>
    </motion.a>
  )
}

export default ProjectItem
