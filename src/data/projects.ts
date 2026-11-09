import type { Project } from '../types/portfolio'
import oneuldorak_thumbnail from '../assets/works/od.png'
import simmons_thumbnail from '../assets/works/sm.png'
import taegeukdang_thumbnail from '../assets/works/tgd.png'
import kwangdong_thumbnail from '../assets/works/kd.png'
import tot_thumbnail from '../assets/works/tot.png'
import art_department_thumbnail from '../assets/works/ad.png'

// 미정 값은 null 또는 빈 배열로 유지합니다. 실제 콘텐츠와 링크만 입력하세요.
const pending_details = {
  project_type: null,
  summary: null,
  description: null,
  keywords: [],
  my_role: null,
  contribution: { planning: null, design: null, development: null },
  tools: [],
  thumbnail: null,
  image: null,
  process_url: null,
  live_url: null,
  external_url: null,
} satisfies Partial<Project>

export const projects: Project[] = [
  { ...pending_details, id: 'od', thumbnail: { src: oneuldorak_thumbnail, alt: '오늘도락 도시락과 모바일 앱 화면', width: 400, height: 300 }, order: 1, name: '오늘도락', subtitle: 'Oneuldorak', presentation: 'modal' },
  { ...pending_details, id: 'sm', thumbnail: { src: simmons_thumbnail, alt: '시몬스 침대와 SIMMONS 로고', width: 400, height: 300 }, order: 2, name: '시몬스', subtitle: 'Simmons Global', presentation: 'modal' },
  { ...pending_details, id: 'tgd', thumbnail: { src: taegeukdang_thumbnail, alt: '신문 형태로 구성한 태극당 웹사이트', width: 400, height: 300 }, order: 3, name: '태극당', subtitle: 'Taegeukdang', presentation: 'modal' },
  { ...pending_details, id: 'kd', thumbnail: { src: kwangdong_thumbnail, alt: '광동제약 로고와 사무실 전경', width: 400, height: 300 }, order: 4, name: '광동제약', subtitle: 'Kwangdong Website Renewal', presentation: 'modal',
    project_type: 'Web Renewal',
    live_url: 'https://o3osso3o.github.io/kwangdong/',
    keywords: ['UX/UI', 'Personal Project'],
    summary: '정보 구조와 제품 탐색 과정을 개선한 웹사이트 리뉴얼',
    description: '기존 웹사이트의 복잡한 정보 구조와 제품 탐색 과정을 개선하고, 사용자가 필요한 정보를 더 빠르게 찾을 수 있도록 설계한 웹사이트 리뉴얼 프로젝트입니다.',
    my_role: 'UX 구조 분석 · IA 재정리 · UI 디자인 · 인터랙션 구현',
    contribution: { planning: 100, design: 100, development: 100 },
    tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'HTML', 'CSS', 'JavaScript', 'GSAP', 'ChatGPT', 'Codex', 'Midjourney', 'VS Code', 'Git', 'GitHub'],
    tool_groups: [
      { label: 'Design', items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'] },
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'GSAP'] },
      { label: 'AI', items: ['ChatGPT', 'Codex', 'Midjourney'] },
      { label: 'Tools', items: ['VS Code', 'Git', 'GitHub'] },
    ], },
  { ...pending_details, id: 'tot', thumbnail: { src: tot_thumbnail, alt: 'TOT 모바일 앱과 Track on your Track 문구', width: 400, height: 300 }, order: 5, name: 'TOT', subtitle: 'Track on your Track', presentation: 'modal' },
  { ...pending_details, id: 'ad', thumbnail: { src: art_department_thumbnail, alt: '붓과 Art Department 문구', width: 400, height: 300 }, order: 6, name: '72초', subtitle: '72seconds', project_type: 'Art Department', presentation: 'external' },
]
