import { useEffect, useRef } from 'react'
import Header from './components/Header/Header'
import { StorytellingLink } from './components/Hero/Hero'
import HeroAbout from './components/HeroAbout/HeroAbout'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  const page_ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const page = page_ref.current!
    const controls = page.querySelectorAll<HTMLElement>('.site_header, .storytelling_link')
    let last_scroll = window.scrollY
    let direction_distance = 0
    let frame_id = 0

    function update_controls() {
      frame_id = 0
      const max_scroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      const current_scroll = Math.min(max_scroll, Math.max(0, window.scrollY))
      const delta = current_scroll - last_scroll
      last_scroll = current_scroll
      if (delta !== 0) {
        direction_distance = Math.sign(delta) === Math.sign(direction_distance)
          ? direction_distance + delta : delta
      }
      if (current_scroll > 8 && Math.abs(direction_distance) < 8) return
      const hidden = current_scroll > 8 && direction_distance > 0
      page.dataset.controlsHidden = String(hidden)
      controls.forEach((control) => { control.inert = hidden })
      direction_distance = 0
    }

    function schedule() {
      if (!frame_id) frame_id = requestAnimationFrame(update_controls)
    }
    window.addEventListener('scroll', schedule, { passive: true })
    return () => {
      cancelAnimationFrame(frame_id)
      window.removeEventListener('scroll', schedule)
      delete page.dataset.controlsHidden
      controls.forEach((control) => { control.inert = false })
    }
  }, [])

  return (
    <div className="portfolio_page" ref={page_ref}>
      <div className="header_slot"><Header /></div>
      <main className="portfolio_main">
        <HeroAbout />
        <Works />
        <Contact />
      </main>
      <Footer />
      <StorytellingLink />
    </div>
  )
}
