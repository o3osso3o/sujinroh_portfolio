import { Fragment } from 'react'
import { certification, education, introduction, skill_groups, work } from '../../data/about'
import type { ProfileEntry } from '../../types/portfolio'
import Faq from './Faq'
import './About.css'

function ProfileColumn({ title, entries, stacked_detail = false }: { title: string; entries: ProfileEntry[]; stacked_detail?: boolean }) {
  return (
    <div className="about_column">
      <h3>{title}</h3>
      <ul className="about_entries">
        {entries.map((entry) => (
          <li key={entry.id}>
            <h4>{entry.name}</h4>
            {stacked_detail && entry.detail && <p className="about_detail">{entry.detail}</p>}
            <p className="about_date">
              {!stacked_detail && entry.detail && <>{entry.detail}<span className="about_meta_separator"> | </span></>}
              <span>{entry.date_label}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AboutIntro() {
  return (
    <div className="about_intro">
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
  )
}

export default function About() {
  return (
    <section id="about" className="about_section" aria-labelledby="about_title">
      <div className="about_intro_hold"><AboutIntro /></div>
      <div className="about_profile_grid">
        <ProfileColumn title="Education" entries={education} stacked_detail />
        <ProfileColumn title="Work" entries={work} />
        <ProfileColumn title="Certification" entries={certification} />
        <div className="about_column">
          <h3>Skills</h3>
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
