import { useState } from 'react'
import AboutSlideshow from './AboutSlideshow'
import { faq_items, faq_pending_answer } from '../../data/about'

export default function Faq() {
  const [open_id, set_open_id] = useState<string | null>(faq_items[0]?.id ?? null)

  return (
    <div className="about_faq">
      <AboutSlideshow />
      <div className="about_faq_shell">
      <section className="about_faq_content" aria-labelledby="about_faq_title">
        <h3 id="about_faq_title">FAQ</h3>
        <div className="about_faq_items">
          {faq_items.map((item) => {
            const is_open = open_id === item.id
            const button_id = `faq_button_${item.id}`
            const panel_id = `faq_panel_${item.id}`
            return (
              <div className="about_faq_item" key={item.id}>
                <h4>
                  <button id={button_id} type="button" aria-expanded={is_open} aria-controls={panel_id}
                    onClick={() => set_open_id(is_open ? null : item.id)}>
                    <span>{item.question}</span>
                    <span className="about_faq_indicator" aria-hidden="true">{is_open ? '−' : '+'}</span>
                  </button>
                </h4>
                <div id={panel_id} role="region" aria-labelledby={button_id} hidden={!is_open} className="about_faq_panel">
                  <p>{item.answer ?? faq_pending_answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      </div>
    </div>
  )
}
