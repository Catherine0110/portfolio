import React from 'react'
import cls from './SectionHead.module.scss'

const SectionHead = ({ title }: { title: string }) => {
  return (
    <div className={cls.SectionHead}>
      <span className={cls.SectionTitle}>{title}</span>
    </div>
  )
}

export default SectionHead
