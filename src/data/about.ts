import type { FaqItem, ProfileEntry, ProfileImage, SkillGroup } from '../types/portfolio'

export const introduction = {
  heading: '팀의 흐름을 읽고 유연하게 움직이는 디자이너, 노수진입니다.',
  description: '다양한 경험을 통해 사람과 브랜드가 만나는 순간에 관심을 갖게 되었습니다.\n사용자의 시선에서 고민하고, 팀과 함께 더 나은 경험을 만들어가고자 합니다.',
}

export const education: ProfileEntry[] = [
  { id: 'ezen', name: '이젠아카데미DX교육센터', detail: 'UXUI디자인&웹기획 프론트엔드 부트캠프', date_label: '2025.12 – 2026.06' },
  { id: 'kaywon', name: '계원예술대학교 – 영상디자인과', detail: null, date_label: '2013.03 – 2016.02' },
]

export const work: ProfileEntry[] = [
  { id: 'paperbird', name: '페이퍼버드 커피하우스', detail: '파티시에', date_label: '2025.06 – 2025.12' },
  { id: 'gruta', name: '그루타', detail: '대표', date_label: '2022.04 – 2025.04' },
  { id: 'acme', name: '애크미', detail: '바리스타', date_label: '2021.01 – 2021.09' },
  { id: 'ilikemountain', name: '아이라이크마운틴', detail: '바리스타', date_label: '2020.05 – 2020.11' },
  { id: '72seconds', name: '칠십이초', detail: '현장미술', date_label: '2015.12 – 2018.08' },
]

export const certification: ProfileEntry[] = [
  { id: 'web-design', name: '웹디자인개발기능사 (필기합격)', detail: '기능사', date_label: '2026.01' },
  { id: 'csp', name: 'CSP Barista Skills (국제자격증)', detail: 'Foundation', date_label: '2020.06' },
  { id: 'barista', name: '바리스타 자격증', detail: '2급', date_label: '2020.03' },
  { id: 'driving', name: '운전면허자격증', detail: '2종 보통', date_label: '2014.08' },
]

// Text marks are placeholders, not brand logos. Add approved local icon paths later.
export const skill_groups: SkillGroup[] = [
  { name: 'Design', items: [
    { name: 'Figma', text_mark: 'Fi', icon_src: null },
    { name: 'Adobe Photoshop', text_mark: 'Ps', icon_src: null },
    { name: 'Adobe Illustrator', text_mark: 'Ai', icon_src: null },
    { name: 'Adobe Premiere Pro', text_mark: 'Pr', icon_src: null },
    { name: 'Adobe After Effects', text_mark: 'Ae', icon_src: null },
  ] },
  { name: 'AI', items: [
    { name: 'ChatGPT', text_mark: 'Ch', icon_src: null },
    { name: 'Claude', text_mark: 'Cl', icon_src: null },
    { name: 'Gemini', text_mark: 'Ge', icon_src: null },
    { name: 'Midjourney', text_mark: 'Mj', icon_src: null },
    { name: 'Codex', text_mark: 'Co', icon_src: null },
  ] },
  { name: 'Development', items: [
    { name: 'HTML', text_mark: 'Ht', icon_src: null },
    { name: 'CSS', text_mark: 'Cs', icon_src: null },
    { name: 'JavaScript', text_mark: 'Js', icon_src: null },
    { name: 'React', text_mark: 'Re', icon_src: null },
    { name: 'TypeScript', text_mark: 'Ts', icon_src: null },
    { name: 'VSCode', text_mark: 'Vs', icon_src: null },
    { name: 'GitHub', text_mark: 'Gh', icon_src: null },
  ] },
]

export const faq_items: FaqItem[] = [
  { id: 'career-change', question: '왜 UX/UI 디자이너로 직무를 전환했나요?', answer: null },
  { id: 'teamwork', question: '함께 일할 때 가장 중요하게 생각하는 것은 무엇인가요?', answer: null },
  { id: 'experience', question: '다양한 직무 경험이 디자인에 어떤 도움이 되었나요?', answer: null },
  { id: 'future', question: '앞으로 어떤 UX/UI 디자이너가 되고 싶나요?', answer: null },
]

export const faq_pending_answer = '답변 준비 중입니다.'
// TODO: Import the supplied FAQ portrait here and provide its description/dimensions.
export const faq_image: ProfileImage | null = null
