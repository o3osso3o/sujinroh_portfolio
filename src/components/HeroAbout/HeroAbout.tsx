import { useLayoutEffect, useRef } from 'react'
import Hero, { StorytellingLink } from '../Hero/Hero'
import About from '../About/About'
import { create_intro_snap, create_scroll_timeline, get_scroll_state } from './scroll_timeline'
import './HeroAbout.css'

export default function HeroAbout() {
  const sequence_ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const sequence = sequence_ref.current!
    const track = sequence.querySelector<HTMLElement>('.hero_scroll_track')!
    const scene = sequence.querySelector<HTMLElement>('.hero_scroll_scene')!
    const hero_viewport = sequence.querySelector<HTMLElement>('.hero_viewport')!
    const visual = sequence.querySelector<HTMLElement>('.hero_visual')!
    const intro = sequence.querySelector<HTMLElement>('.about_intro')!
    const profile_grid = sequence.querySelector<HTMLElement>('.about_profile_grid')!
    const motion_query = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame_id = 0
    let needs_measure = true
    let enabled = false
    let track_top = 0
    let timeline = create_scroll_timeline(1, 1, 1, 2)

    function measure() {
      const viewport_height = document.documentElement.clientHeight
      const scene_height = hero_viewport.offsetHeight
      enabled = !motion_query.matches && viewport_height >= 600
      sequence.dataset.scrollEnabled = String(enabled)
      if (!enabled) {
        document.documentElement.classList.remove('hero_intro_snap')
        return
      }

      // Preserve the half-viewport spacing in normal document flow.
      sequence.style.setProperty('--profile_gap', `${viewport_height * 0.5}px`)
      const intro_snap = create_intro_snap(viewport_height, visual.offsetHeight, intro.offsetHeight)
      sequence.style.setProperty('--intro_snap_top', `${intro_snap.snap_top}px`)
      sequence.style.setProperty('--intro_hold_height', `${intro_snap.wrapper_height}px`)
      document.documentElement.classList.toggle('hero_intro_snap', intro_snap.fits_viewport)
      track_top = track.getBoundingClientRect().top + window.scrollY
      const profile_bounds = profile_grid.getBoundingClientRect()
      const profile_top = profile_bounds.top + window.scrollY - track_top
      timeline = create_scroll_timeline(
        viewport_height, scene_height, visual.offsetHeight,
        profile_top,
      )
      sequence.style.setProperty('--track_height', `${timeline.track_height}px`)
      sequence.style.setProperty('--about_anchor_offset', `${viewport_height * 0.05 + visual.offsetHeight + 24}px`)

    }

    function update() {
      frame_id = 0
      if (needs_measure) {
        measure()
        needs_measure = false
      }
      if (!enabled) return
      const state = get_scroll_state(timeline, window.scrollY - track_top)
      sequence.style.setProperty('--hero_y', `${state.hero_y}px`)
      sequence.style.setProperty('--hero_scale', String(state.hero_scale))
      sequence.style.setProperty('--hero_cover_height', `${state.hero_bottom}px`)
      sequence.dataset.scrollPhase = state.phase
    }

    function schedule() {
      if (!frame_id) frame_id = requestAnimationFrame(update)
    }
    function schedule_measure() {
      needs_measure = true
      schedule()
    }
    const resize_observer = new ResizeObserver(schedule_measure)
    resize_observer.observe(scene)
    resize_observer.observe(visual)
    resize_observer.observe(intro)
    resize_observer.observe(profile_grid)
    resize_observer.observe(sequence.querySelector<HTMLElement>('.about_section')!)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule_measure)
    motion_query.addEventListener('change', schedule_measure)
    update()
    return () => {
      document.documentElement.classList.remove('hero_intro_snap')
      cancelAnimationFrame(frame_id)
      resize_observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule_measure)
      motion_query.removeEventListener('change', schedule_measure)
    }
  }, [])

  return (
    <div className="hero_about_sequence" ref={sequence_ref}>
      <div id="home" className="hero_scroll_track">
        <div className="hero_scroll_scene">
          <div className="hero_viewport"><Hero /></div>
        </div>
        <div className="hero_storytelling_slot"><StorytellingLink /></div>
      </div>
      <About />
    </div>
  )
}
