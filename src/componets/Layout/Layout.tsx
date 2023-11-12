import React from 'react'
import cls from './Layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={cls.container}>{children}</div>
}

export default Layout
