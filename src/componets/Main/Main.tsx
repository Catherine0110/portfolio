import cls from './Main.module.scss'
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'

const Main = () => {
  return (
    <div className={cls.Main}>
      <Header />
      <MainContent />
    </div>
  )
}

export default Main
