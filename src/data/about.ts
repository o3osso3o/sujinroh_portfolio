import figma_icon from '../assets/icon/skills/figma.png'
import photoshop_icon from '../assets/icon/skills/photoshop.png'
import illustrator_icon from '../assets/icon/skills/illustrator.png'
import premierepro_icon from '../assets/icon/skills/premierepro.png'
import aftereffects_icon from '../assets/icon/skills/aftereffects.png'
import chatgpt_icon from '../assets/icon/skills/chatgpt.png'
import claude_icon from '../assets/icon/skills/claude.png'
import gemini_icon from '../assets/icon/skills/gemini.png'
import midjourney_icon from '../assets/icon/skills/midjourney.png'
import codex_icon from '../assets/icon/skills/codex.png'
import html_icon from '../assets/icon/skills/html.png'
import css_icon from '../assets/icon/skills/css.png'
import javascript_icon from '../assets/icon/skills/javascript.png'
import react_icon from '../assets/icon/skills/react.png'
import vscode_icon from '../assets/icon/skills/vscode.png'
import github_icon from '../assets/icon/skills/github.png'
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

export const skill_groups: SkillGroup[] = [
  { name: 'Design', items: [
    { name: 'Figma', text_mark: 'Fi', icon_src: figma_icon },
    { name: 'Adobe Photoshop', text_mark: 'Ps', icon_src: photoshop_icon },
    { name: 'Adobe Illustrator', text_mark: 'Ai', icon_src: illustrator_icon },
    { name: 'Adobe Premiere Pro', text_mark: 'Pr', icon_src: premierepro_icon },
    { name: 'Adobe After Effects', text_mark: 'Ae', icon_src: aftereffects_icon },
  ] },
  { name: 'AI', items: [
    { name: 'ChatGPT', text_mark: 'Ch', icon_src: chatgpt_icon },
    { name: 'Claude', text_mark: 'Cl', icon_src: claude_icon },
    { name: 'Gemini', text_mark: 'Ge', icon_src: gemini_icon },
    { name: 'Midjourney', text_mark: 'Mj', icon_src: midjourney_icon },
    { name: 'Codex', text_mark: 'Co', icon_src: codex_icon },
  ] },
  { name: 'Development', items: [
    { name: 'HTML', text_mark: 'Ht', icon_src: html_icon },
    { name: 'CSS', text_mark: 'Cs', icon_src: css_icon },
    { name: 'JavaScript', text_mark: 'Js', icon_src: javascript_icon },
    { name: 'React', text_mark: 'Re', icon_src: react_icon },
    { name: 'VSCode', text_mark: 'Vs', icon_src: vscode_icon },
    { name: 'GitHub', text_mark: 'Gh', icon_src: github_icon },
  ] },
]

export const faq_items: FaqItem[] = [
  { id: 'career-change', question: '왜 UX/UI 디자이너로 직무를 전환했나요?', answer: '영상미술과 카페 운영을 경험하면서 사람들이 공간과 브랜드를 어떻게 받아들이고 경험하는지 자연스럽게 관심을 갖게 되었습니다. 이후 개발에 호기심이 생겨 웹 기획과 프론트엔드를 배우기 시작했고, 프로젝트를 진행하며 사용자의 입장에서 문제를 발견하고, 더 나은 경험을 설계하는 과정에 큰 흥미를 느꼈습니다. 이전의 경험을 새로운 방식으로 이어갈 수 있는 분야라고 생각해 UX/UI 디자이너의 길을 선택했습니다.' },
  { id: 'teamwork', question: '함께 일할 때 가장 중요하게 생각하는 것은 무엇인가요?', answer: '서로의 생각을 이해하고, 완성이라는 같은 방향을 바라보는 것이 가장 중요하다고 생각합니다. 팀의 흐름을 파악하고 필요한 일을 찾아 움직이며, 의견이 다를 때는 각자의 생각과 근거를 나누고 여러 대안을 비교해 더 나은 방향을 찾으려고 합니다. 개인의 의견을 관철하기보다 팀이 좋은 결과를 만들어가는 과정을 중요하게 생각합니다.' },
  { id: 'experience', question: '다양한 직무 경험이 디자인에 어떤 도움이 되었나요?', answer: '영상미술에서는 아이디어를 현실로 구현하는 방법을, 카페 운영에서는 고객의 반응을 관찰하고 개선하는 방법을 배웠습니다. 다른 일이지만, 결국 경험하는 이의 입장에서 생각하고 주어진 조건 안에서 최선의 결과를 찾아 완성해야 한다는 공통점이 있습니다. 이러한 경험은 아이디어에 머무르지 않고 실제 결과물로 구현해 내는 태도의 바탕이 되었습니다.' },
  { id: 'future', question: '앞으로 어떤 경험을 만드는 UX/UI 디자이너가 되고 싶나요?', answer: '브랜드가 전하고 싶은 가치와 사용자가 필요로 하는 경험을 자연스럽게 연결하고 싶습니다. 단순히 보기 좋은 화면을 넘어, 사용자가 서비스를 처음 만나는 순간부터 이용하고 기억하는 과정까지 고민하는 디자이너가 되고 싶습니다. 아직 배워야 할 것이 많지만, 다양한 관점을 유연하게 받아들이고 문제의 본질을 고민하며 꾸준히 성장하겠습니다.' },
]

export const faq_pending_answer = '답변 준비 중입니다.'
// TODO: Import the supplied FAQ portrait here and provide its description/dimensions.
export const faq_image: ProfileImage | null = null
