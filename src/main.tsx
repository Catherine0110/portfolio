import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import MobileContextProvider from './componets/utils/MobileContextProvider.tsx'
import ErrorBoundary from './providers/ErroeBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <MobileContextProvider>
        <App />
      </MobileContextProvider>
    </ErrorBoundary>
  </BrowserRouter>,
)
