import React, { memo } from 'react'
import cls from './ParalaxItem.module.scss'
import { classNames } from '../../utils/ClassNames'
import { MouseParallax } from 'react-just-parallax'

interface IparalaxEl {
  top: string
  left?: string
  right?: string
  colorIcon?: string
  dots?: boolean
  icon?: string
}

interface ParalaxItemProps {
  className?: string
  children?: React.ReactNode
  circle?: boolean
  id?: number
  paralaxEl: IparalaxEl
}

const ParalaxItem = memo((props: ParalaxItemProps) => {
  const { className, paralaxEl, circle, id } = props
  return (
    <MouseParallax strength={0.05} enableOnTouchDevice isAbsolutelyPositioned>
      <div
        data-id={id}
        style={{
          top: `${paralaxEl?.top}`,
          left: `${paralaxEl?.left}`,
          right: `${paralaxEl?.right}`,
        }}
        className={classNames(
          cls.ParalaxItem,
          {
            [cls.ParalaxCircle]: circle,
            [cls.paralaxElDots]: paralaxEl?.dots,
            [cls[paralaxEl!.colorIcon!]]: paralaxEl?.colorIcon,
          },
          [className],
        )}>
        {paralaxEl?.icon && <paralaxEl.icon />}
      </div>
    </MouseParallax>
  )
})

export default ParalaxItem
