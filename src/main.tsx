import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './styles/tokens.css'
import './styles/global.css'
import App from './App'

const root_element = document.getElementById('root')

if (!root_element) {
  throw new Error('앱을 표시할 root 요소를 찾을 수 없습니다.')
}

createRoot(root_element).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
