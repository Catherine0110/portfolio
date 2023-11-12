import { useEffect, useState, Suspense } from 'react'

import Contacts from './componets/Contacts/Contacts'
import Layout from './componets/Layout/Layout'
import Main from './componets/Main/Main'
import StarsCanvas from './componets/Stars/Stars'
import About from './componets/About/About'
import Projects from './componets/Projects/Projects/Projects'
import './libs/i18n'

import './styles/index.scss'

function App() {
  const [isLoading, setLoading] = useState(true)
  const preloadRequest = () => {
    return new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(), 1000)
    })
  }

  useEffect(() => {
    preloadRequest().then(() => {
      const loaderElement = document.querySelector('.preloader')
      if (loaderElement) {
        loaderElement.remove()
        setLoading(!isLoading)
      }
    })
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <Suspense fallback="">
      <Layout>
        <Main />
        <About />
      </Layout>
      <Projects />
      <div style={{ position: 'relative' }}>
        <Layout>
          <Contacts />
        </Layout>
        <StarsCanvas />
      </div>
    </Suspense>
  )
}

export default App
