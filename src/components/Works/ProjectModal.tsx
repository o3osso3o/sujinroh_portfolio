import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../../types/portfolio'
import ProjectVisual from './ProjectVisual'

export default function ProjectModal({ project, on_close }: { project: Project; on_close: () => void }) {
  const dialog_ref = useRef<HTMLDialogElement>(null)
  const close_ref = useRef<HTMLButtonElement>(null)
  const timer_ref = useRef<ReturnType<typeof setTimeout> | null>(null)
  const backdrop_press = useRef(false)
  const [is_closing, set_is_closing] = useState(false)

  useEffect(() => {
    const dialog = dialog_ref.current!
    const previous_overflow = document.body.style.overflow
    const previous_padding = document.body.style.paddingRight
    const scrollbar_width = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar_width > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbar_width}px`
    dialog.showModal()
    close_ref.current?.focus({ preventScroll: true })
    return () => {
      if (timer_ref.current) clearTimeout(timer_ref.current)
      dialog.close()
      document.body.style.overflow = previous_overflow
      document.body.style.paddingRight = previous_padding
    }
  }, [])

  function request_close() {
    if (is_closing) return
    set_is_closing(true)
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180
    timer_ref.current = setTimeout(() => { dialog_ref.current?.close(); on_close() }, delay)
  }

  return createPortal(
    <dialog ref={dialog_ref} className="works_modal" data-closing={is_closing} aria-labelledby="works_modal_title"
      onCancel={(event) => { event.preventDefault(); request_close() }}
      onPointerDown={(event) => { backdrop_press.current = event.target === event.currentTarget }}
      onClick={(event) => { if (backdrop_press.current && event.target === event.currentTarget) request_close(); backdrop_press.current = false }}>
      <div className="works_modal_surface">
        <div className="works_modal_top"><span>PROJECT {String(project.order).padStart(2, '0')}</span><button ref={close_ref} type="button" onClick={request_close} aria-label="프로젝트 상세 닫기">닫기 <span aria-hidden="true">×</span></button></div>
        <ProjectVisual image={project.image ?? project.thumbnail} title={project.name} />
        <div className="works_modal_content">
          <header><p className="works_eyebrow">{project.subtitle}</p><h2 id="works_modal_title">{project.name}</h2></header>
          <section><h3>Description</h3><p>{project.description ?? project.summary ?? '프로젝트 소개 준비 중입니다.'}</p></section>
          <section><h3>Keywords</h3><p>{project.keywords.length ? project.keywords.join(' · ') : '키워드 준비 중입니다.'}</p></section>
          <section><h3>My Role</h3><p>{project.my_role ?? '담당 역할 준비 중입니다.'}</p></section>
          <section><h3>Contribution</h3><dl className="works_contribution">
            {(['planning', 'design', 'development'] as const).map((key) => <div key={key}><dt>{key.charAt(0).toUpperCase() + key.slice(1)}</dt><dd>{project.contribution?.[key] == null ? '확인 중' : `${project.contribution[key]}%`}</dd></div>)}
          </dl></section>
          <section><h3>Tools &amp; Technologies</h3><p>{project.tools.length ? project.tools.join(' · ') : '사용 도구 준비 중입니다.'}</p></section>
          {(project.process_url || project.live_url) && <div className="works_modal_actions">
            {project.process_url && <a href={project.process_url} target="_blank" rel="noopener noreferrer">View Process <span aria-hidden="true">↗</span><span className="visually_hidden"> (새 탭)</span></a>}
            {project.live_url && <a href={project.live_url} target="_blank" rel="noopener noreferrer">View Live <span aria-hidden="true">↗</span><span className="visually_hidden"> (새 탭)</span></a>}
          </div>}
        </div>
      </div>
    </dialog>, document.body,
  )
}
