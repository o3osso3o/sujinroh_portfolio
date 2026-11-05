import { Fragment, useEffect, useRef } from 'react'
import { certification, education, introduction, skill_groups, work } from '../../data/about'
import type { ProfileEntry } from '../../types/portfolio'
import Faq from './Faq'
import './About.css'

function ProfileColumn({ title, entries }: { title: string; entries: ProfileEntry[] }) {
  return (
    <div className="about_column">
      <h3>{title}</h3>
      <ul className="about_entries">
        {entries.map((entry) => (
          <li key={entry.id}>
            <h4>{entry.name}</h4>
            {entry.detail && <p className="about_detail">{entry.detail}</p>}
            <p className="about_date">{entry.date_label}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  const intro_ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const intro_element = intro_ref.current
    if (!intro_element || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        intro_element.dataset.revealed = 'true'
        observer.disconnect()
      }
    }, { threshold: 0.15 })

    observer.observe(intro_element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about_section" aria-labelledby="about_title">
      <div className="about_intro" ref={intro_ref}>
        <h2 id="about_title" className="about_statement">{introduction.heading}</h2>
        <p className="about_description">
          {introduction.description.split('\n').map((line, line_index) => (
            <Fragment key={line}>
              {line_index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </div>
      <div className="about_profile_grid">
        <ProfileColumn title="EDUCATION" entries={education} />
        <ProfileColumn title="WORK" entries={work} />
        <ProfileColumn title="CERTIFICATION" entries={certification} />
        <div className="about_column">
          <h3>SKILLS</h3>
          <div className="about_skill_groups">
            {skill_groups.map((group) => (
              <div key={group.name}>
                <h4 className="about_skill_heading">{group.name}</h4>
                <ul className="about_skill_tiles">
                  {group.items.map((skill) => (
                    <li className="about_skill_tile" key={skill.name}>
                      {skill.icon_src ? (
                        <img src={skill.icon_src} alt="" width="24" height="24" loading="lazy" />
                      ) : (
                        <span className="about_skill_mark" aria-hidden="true">{skill.text_mark}</span>
                      )}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Faq />
    </section>
  )
}
