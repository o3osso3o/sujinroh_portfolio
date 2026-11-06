import { useEffect, useRef } from 'react'
import hero_01 from '../../assets/hero_01.png'
import hero_02 from '../../assets/hero_02.png'
import { profile } from '../../data/profile'
import './Hero.css'

export default function Hero() {
  const hero_ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero_element = hero_ref.current
    if (!hero_element) return

    const interaction_query = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    let active_image = 'first'
    let last_change = -Infinity

    function reset_image() {
      if (!hero_element) return
      active_image = 'first'
      last_change = -Infinity
      hero_element.dataset.image = 'first'
    }

    function handle_pointer_move(event: PointerEvent) {
      if (!hero_element || !interaction_query.matches || event.pointerType !== 'mouse') return
      const bounds = hero_element.getBoundingClientRect()
      const relative_x = (event.clientX - bounds.left) / bounds.width
      // A central dead zone and 400ms minimum interval prevent rapid flickering.
      const next_image = relative_x > 0.58 ? 'second' : relative_x < 0.42 ? 'first' : active_image
      const now = performance.now()
      if (next_image === active_image || now - last_change < 400) return
      active_image = next_image
      last_change = now
      hero_element.dataset.image = next_image
    }

    hero_element.addEventListener('pointermove', handle_pointer_move, { passive: true })
    hero_element.addEventListener('pointerleave', reset_image)
    interaction_query.addEventListener('change', reset_image)
    return () => {
      hero_element.removeEventListener('pointermove', handle_pointer_move)
      hero_element.removeEventListener('pointerleave', reset_image)
      interaction_query.removeEventListener('change', reset_image)
    }
  }, [])

  return (
    <section className="hero" ref={hero_ref} aria-labelledby="hero_title">
      <div className="hero_visual">
        <div className="hero_portrait" role="img" aria-label="야외에서 검은색 모자를 쓴 UX/UI 디자이너 노수진">
          <img className="hero_image hero_image_first" src={hero_01} alt="" width="720" height="880" fetchPriority="high" />
          <img className="hero_image hero_image_second" src={hero_02} alt="" width="720" height="880" decoding="async" />
        </div>
        <div className="hero_typography">
          <h1 id="hero_title" className="hero_title"><span aria-hidden="true">Port<span className="hero_title_suffix">folio</span></span><span className="visually_hidden">Portfolio — Sujin Roh, UX/UI Designer</span></h1>
          <p className="hero_name" aria-hidden="true"><span>ROH</span><span>SUJIN</span></p>
        </div>
      </div>
    </section>
  )
}

export function StorytellingLink() {
  return (
    <>
      {profile.storytelling_url && (
        <a className="storytelling_link" href={profile.storytelling_url} target="_blank" rel="noopener noreferrer">
          <span className="storytelling_dot" aria-hidden="true" />
          Storytelling Portfolio <span aria-hidden="true">↗</span>
          <span className="visually_hidden"> (새 탭에서 열림)</span>
        </a>
      )}
    </>
  )
}
