import { useEffect, useRef, useState } from 'react'
import { about_slides } from '../../data/about_slides'
import './AboutSlideshow.css'

export default function AboutSlideshow() {
  const section_ref = useRef<HTMLElement>(null)
  const [in_view, set_in_view] = useState(false)
  const [active_index, set_active_index] = useState(0)
  const [timer_version, set_timer_version] = useState(0)
  const [paused, set_paused] = useState(false)
  const [hovered, set_hovered] = useState(false)
  const [focused, set_focused] = useState(false)
  const [reduced_motion, set_reduced_motion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [page_hidden, set_page_hidden] = useState(document.hidden)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      const timer = window.setTimeout(() => set_in_view(true), 0)
      return () => window.clearTimeout(timer)
    }
    const observer = new IntersectionObserver(([entry]) => set_in_view(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(section_ref.current!)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update_motion = () => set_reduced_motion(query.matches)
    const update_visibility = () => set_page_hidden(document.hidden)
    query.addEventListener('change', update_motion)
    document.addEventListener('visibilitychange', update_visibility)
    return () => {
      query.removeEventListener('change', update_motion)
      document.removeEventListener('visibilitychange', update_visibility)
    }
  }, [])

  useEffect(() => {
    if (!in_view || paused || hovered || focused || reduced_motion || page_hidden) return
    const timer = window.setTimeout(() => set_active_index((previous) => (previous + 1) % about_slides.length), 4000)
    return () => window.clearTimeout(timer)
  }, [in_view, active_index, timer_version, paused, hovered, focused, reduced_motion, page_hidden])

  return (
    <section ref={section_ref} className="about_slideshow" aria-label="ABOUT ME 사진" aria-roledescription="슬라이드쇼"
      onMouseEnter={() => set_hovered(true)} onMouseLeave={() => set_hovered(false)}
      onFocusCapture={() => set_focused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) set_focused(false) }}>
      <div className="about_slide_stage">
        <div className="about_slide_frame" id="about_slide_frame" aria-live="off">
          {about_slides.map((slide, index) => (
            <div className="about_slide" data-active={index === active_index} aria-hidden={index !== active_index} key={slide.letter}>
              {slide.src ? <img src={slide.src} alt={slide.alt} width={420} height={400} /> : <div className="about_slide_placeholder" role="img" aria-label={slide.alt}>사진 준비 중</div>}
            </div>
          ))}
        </div>
        <div className="about_slide_letters" role="group" aria-label="사진 선택">
          {about_slides.map((slide, index) => (
            <button className="about_slide_letter" data-letter={slide.letter} key={slide.letter} type="button"
              aria-label={`${slide.letter} — ${slide.title} 사진 보기`} aria-pressed={index === active_index} aria-controls="about_slide_frame"
              onClick={() => { set_active_index(index); set_timer_version((previous) => previous + 1) }}>
              {slide.letter}
            </button>
          ))}
        </div>
      </div>
      {!reduced_motion && <button className="about_slide_pause" type="button" onClick={() => set_paused((previous) => !previous)}>
        {paused ? '자동 전환 재생' : '자동 전환 일시정지'}
      </button>}
    </section>
  )
}
