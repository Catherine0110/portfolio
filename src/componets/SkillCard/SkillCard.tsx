import { motion } from 'framer-motion'
import { classNames } from '../utils/ClassNames'

import cls from './SkillCard.module.scss'
import { fadeIn } from '../utils/motion'

export enum SkillCardThemes {
  PINK = 'SkillCardPink',
  GREEN = 'SkillCardGreen',
  GREEN_LIGHT = 'SkillCardGreenLight',
  BLUE = 'SkillCardBlue',
  YELLOW = 'SkillCardYellow',
  VIOLET = 'SkillCardViolet',
  FUCHSIA = 'SkillCardFuchsia',
}

export interface Item {
  icon?: string
  img?: string
  text: string
  index: number
  theme?: SkillCardThemes
}

interface SkillCardProps {
  className?: string
  theme?: SkillCardThemes
  item: Item
}

const SkillCard = (props: SkillCardProps) => {
  const { theme = SkillCardThemes.PINK, item } = props

  return (
    <motion.div
      variants={fadeIn('right', 'spring', item.index * 0.5, 0.3)}
      className={classNames(cls.SkillCard, {}, [cls[theme]])}>
      {item?.img ? (
        <img className={cls.SkillCardIcon} src={item?.img} />
      ) : (
        item.icon && (
          <div className={cls.SkillCardIcon}>
            <item.icon />
          </div>
        )
      )}
      <span className={cls.SkillCardText}>{item.text}</span>
    </motion.div>
  )
}

export default SkillCard
