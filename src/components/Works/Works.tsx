import { useEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../types/portfolio'
import ProjectVisual from './ProjectVisual'
import ProjectModal from './ProjectModal'
import ActionArrow from './ActionArrow'
import './Works.css'

export default function Works() {
  const [selected_project, set_selected_project] = useState<Project | null>(null)
  const grid_ref = useRef<HTMLOListElement>(null)
  const trigger_ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('works_card_entered')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08 })
    grid_ref.current?.querySelectorAll('.works_card').forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  function close_modal() {
    set_selected_project(null)
    trigger_ref.current?.focus({ preventScroll: true })
  }

  return (
    <section id="works" className="works_section" aria-labelledby="works_title">
      <h2 id="works_title" className="works_heading">WORKS</h2>
      <ol className="works_grid" ref={grid_ref}>
        {[...projects].sort((a, b) => a.order - b.order).map((project) => {
          const external = project.presentation === 'external'
          const content = <>
            <ProjectVisual image={project.thumbnail} title={project.name} />
            <span className="works_card_meta">
              <span className="works_card_title">{project.name}</span>
              <span className="works_card_type">{project.project_type ?? '유형 준비 중'}</span>
            </span>
            <span className="works_card_details">
              <span>{project.summary ?? (external ? '영상 프로덕션 · 미술팀 경력' : '프로젝트 소개 준비 중')}</span>
              <span className="works_keywords">{project.keywords.length ? project.keywords.join(' · ') : '키워드 준비 중'}</span>
              <span className="works_card_action">{external ? (project.external_url ? 'YouTube에서 보기' : 'YouTube 링크 준비 중') : '상세 보기'} <ActionArrow /></span>
            </span>
          </>
          return (
            <li className="works_card" key={project.id}>
              {external ? (
                project.external_url ? <a className="works_card_control" href={project.external_url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} YouTube에서 보기 (새 탭)`}>{content}</a>
                  : <div className="works_card_control works_card_pending" tabIndex={0} role="link" aria-disabled="true" aria-label={`${project.name}, YouTube 링크 준비 중`}>{content}</div>
              ) : (
                <button className="works_card_control" type="button" aria-haspopup="dialog" aria-label={`${project.name} 상세 보기`}
                  onClick={(event) => { trigger_ref.current = event.currentTarget; set_selected_project(project) }}>{content}</button>
              )}
            </li>
          )
        })}
      </ol>
      {selected_project && <ProjectModal project={selected_project} on_close={close_modal} />}
    </section>
  )
}
