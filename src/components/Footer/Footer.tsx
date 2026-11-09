import type { MouseEvent } from 'react'
import { profile } from '../../data/profile'
import ActionArrow from '../Works/ActionArrow'
import './Footer.css'

export default function Footer() {
  function back_to_top(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const home = document.getElementById('home')
    if (!home) return
    event.preventDefault()
    // Move keyboard focus with the viewport, without changing the HERO timeline.
    home.setAttribute('tabindex', '-1')
    home.focus({ preventScroll: true })
    home.addEventListener('blur', () => home.removeAttribute('tabindex'), { once: true })
    window.history.replaceState(null, '', '#home')
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }
  return <footer className="site_footer">
    <p>© 2026 SUJIN ROH</p>
    <nav aria-label="푸터 메뉴">
      {profile.storytelling_url && <a href={profile.storytelling_url} target="_blank" rel="noopener noreferrer">Storytelling Portfolio <ActionArrow stroke_width={2} /><span className="visually_hidden"> (새 탭에서 열림)</span></a>}
      <a href="#home" onClick={back_to_top}>Back to Top</a>
    </nav>
  </footer>
}
