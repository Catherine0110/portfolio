import { motion } from 'framer-motion'
import React from 'react'

export const staggerContainer = () => {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0,
      },
    },
  }
}

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}>
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
