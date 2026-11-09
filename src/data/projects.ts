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
  { ...pending_details, id: 'od', thumbnail: { src: oneuldorak_thumbnail, alt: '오늘도락 도시락과 모바일 앱 화면', width: 400, height: 300 }, order: 1, name: '오늘도락', subtitle: 'Oneul Dorak - AI Lunchbox Planning App', presentation: 'modal' ,
    project_type: 'AI Lunchbox Planning Mobile App',
    live_url: 'https://o3osso3o.github.io/oneuldorak_new/',
    keywords: ['AI Chat-bot', 'PM'],
    summary: '보유 재료, 예산, 준비 시간을 기반으로 도시락을 추천하고, 지속적인 식비 절약을 돕도록 설계한 AI 기반 모바일 커뮤니티 앱 프로젝트',
    description: '메뉴 고민과 식재료 관리의 어려움을 해결하기 위해 보유 재료, 예산, 준비 시간을 기반으로 도시락을 추천하고, 지속적인 식비 절약을 돕도록 설계한 AI 기반 모바일 커뮤니티 앱 프로젝트입니다.',
    my_role: 'PM · 프로젝트 기획 · 앱 진입 화면, 온보딩, 로그인·회원가입 UX/UI 디자인 · 캐릭터 이미지 및 모션 제작 · AI챗봇 페이지 UI 디자인 · 커뮤니티 페이지 UX/UI 디자인',
    contribution: { planning: 44, design: 66, development: 20 },
    tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'HTML', 'CSS', 'JavaScript', 'React','TypeScript','GSAP', 'ChatGPT', 'Codex','Claude', 'Midjourney','OpenAI API', 'VS Code', 'Git', 'GitHub', 'Vercel'],
    tool_groups: [
      { label: 'Design', items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'] },
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React','TypeScript','GSAP'] },
      { label: 'AI', items: ['ChatGPT', 'Codex', 'Claude','Midjourney','OpenAI API'] },
      { label: 'Tools', items: ['VS Code', 'Git', 'GitHub', 'Vercel'] },
    ], },
  { ...pending_details, id: 'sm', thumbnail: { src: simmons_thumbnail, alt: '시몬스 침대와 SIMMONS 로고', width: 400, height: 300 }, order: 2, name: '시몬스', subtitle: 'SIMMONS - Global Website Renewal', presentation: 'modal'  ,
    project_type: 'Global Website Renewal',
    live_url: 'https://hyunjireal.github.io/resimmons/',
    keywords: ['Brand Experience', 'Non-commerce'],
    summary: '글로벌 사용자를 대상으로 시몬스의 브랜드 헤리티지와 기술력을 전달하고, 온라인 브랜드 경험을 오프라인 매장 방문으로 연결하도록 설계한 비커머스 웹사이트 프로젝트',
    description: '글로벌 사용자를 대상으로 시몬스의 브랜드 헤리티지와 기술력을 전달하고, 온라인 브랜드 경험을 오프라인 매장 방문으로 연결하도록 설계한 비커머스 웹사이트 프로젝트입니다.',
    my_role: '브랜드 리서치 · 인트로 및 메인 영상 제작 · 제품 상세 페이지 UI 디자인 · 반응형 웹 구현',
    contribution: { planning: 25, design: 20, development: 20 },
    tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator','Adobe Premiere Pro', 'HTML', 'CSS', 'JavaScript', 'GSAP', 'ChatGPT', 'Codex', 'Midjourney','VS Code', 'Git', 'GitHub'],
    tool_groups: [
      { label: 'Design', items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro'] },
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'GSAP'] },
      { label: 'AI', items: ['ChatGPT', 'Codex', 'Midjourney'] },
      { label: 'Tools', items: ['VS Code', 'Git', 'GitHub'] },
    ],},
  { ...pending_details, id: 'tgd', thumbnail: { src: taegeukdang_thumbnail, alt: '신문 형태로 구성한 태극당 웹사이트', width: 400, height: 300 }, order: 3, name: '태극당', subtitle: 'Taegeukdang 80th Anniversary Website Renewal', presentation: 'modal'  ,
    project_type: 'Website Renewal',
    live_url: 'https://tae01.vercel.app/',
    keywords: ['Brand Experience', 'UX/UI'],
    summary: '태극당의 80년 헤리티지와 브랜드 정체성을 신문형 레이아웃에 담아 현대적인 웹 경험으로 재해석한 리뉴얼 프로젝트',
    description: '태극당의 80년 헤리티지와 브랜드 정체성을 현대적인 웹 경험으로 재해석하고, 신문형 레이아웃과 스토리텔링 콘텐츠를 통해 브랜드의 이야기를 새롭게 전달한 웹사이트 리뉴얼 프로젝트입니다.',
    my_role: '브랜드 및 UX 분석 · 메인 비주얼 레이아웃 디자인 · 연혁 페이지 UI 디자인 · 콘텐츠 기획 · 웹 구현',
    contribution: { planning: 25, design: 25, development: 25 },
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript','React','TypeScript','GSAP', 'ChatGPT', 'Codex', 'VS Code', 'Git', 'GitHub','Vercel'],
    tool_groups: [
      { label: 'Design', items: ['Figma'] },
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript','React','TypeScript','GSAP'] },
      { label: 'AI', items: ['ChatGPT', 'Codex'] },
      { label: 'Tools', items: ['VS Code', 'Git', 'GitHub','Vercel'] },
    ],},
  { ...pending_details, id: 'kd', thumbnail: { src: kwangdong_thumbnail, alt: '광동제약 로고와 사무실 전경', width: 400, height: 300 }, order: 4, name: '광동제약', subtitle: 'Kwangdong Website Renewal', presentation: 'modal',
    project_type: 'Web Renewal',
    live_url: 'https://o3osso3o.github.io/kwangdong/',
    keywords: ['UX/UI', 'Personal Project'],
    summary: '기존 웹사이트의 복잡한 정보 구조와 제품 탐색 과정을 개선해, 사용자가 필요한 정보를 쉽고 빠르게 찾을 수 있도록 설계한 웹사이트 리뉴얼 프로젝트',
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
  { ...pending_details, id: 'tot', thumbnail: { src: tot_thumbnail, alt: 'TOT 모바일 앱과 Track on your Track 문구', width: 400, height: 300 }, order: 5, name: 'TOT', subtitle: 'Track on your Track - Walking & Music App', presentation: 'modal'  ,
    project_type: 'Product Planning & UX/UI Design',
    live_url: 'https://hyunjireal.github.io/resimmons/',
    keywords: ['App Design', 'Personal Project'],
    summary: '사용자의 기분과 상황에 맞는 걷기 코스와 음악을 함께 추천하고, 여러 앱을 오가는 번거로움 없이 간편하게 걷기를 시작할 수 있도록 설계한 모바일 앱 프로젝트',
    description: '사용자의 기분과 상황에 맞는 걷기 코스와 음악을 함께 추천하고, 여러 앱을 오가는 번거로움 없이 간편하게 걷기를 시작할 수 있도록 설계한 모바일 앱 프로젝트입니다.',
    my_role: '서비스 기획 · UX 흐름 설계 · UI 디자인 · 프로토타입 제작',
    contribution: { planning: 100, design: 100, development: 100 },
    tools: ['Figma','Adobe Illustrator', 'ChatGPT'],
    tool_groups: [
      { label: 'Design', items: ['Figma','Adobe Illustrator'] },
      { label: 'AI', items: ['ChatGPT'] },
    ],},
  { ...pending_details, id: 'ad', thumbnail: { src: art_department_thumbnail, alt: '붓과 Art Department 문구', width: 400, height: 300 }, order: 6, name: '영상미술', subtitle: '72seconds', project_type: 'Art Department', presentation: 'external' ,external_url: 'https://www.youtube.com/@72tv21', keywords: ['Art Department', 'Video Production'],
    summary: '촬영 현장 미술팀에서 다양한 영상 콘텐츠의 소품과 세트를 디자인·제작하고, 콘셉트에 맞는 장면을 시각적으로 구현한 영상미술 프로젝트'
  ,},
]
