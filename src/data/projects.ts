import type { Project } from '../types/portfolio'

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
  { ...pending_details, id: 'oneuldorak', order: 1, name: '오늘도락', subtitle: 'Oneuldorak', presentation: 'modal' },
  { ...pending_details, id: 'simmons', order: 2, name: '시몬스', subtitle: 'Simmons Global', presentation: 'modal' },
  { ...pending_details, id: 'taegeukdang', order: 3, name: '태극당', subtitle: 'Taegeukdang', presentation: 'modal' },
  { ...pending_details, id: 'kwangdong', order: 4, name: '광동제약', subtitle: 'Kwangdong Pharmaceutical', presentation: 'modal' },
  { ...pending_details, id: 'tot', order: 5, name: 'TOT', subtitle: 'Track on your Track', presentation: 'modal' },
  { ...pending_details, id: '72seconds', order: 6, name: '72초', subtitle: '72seconds', project_type: 'Art Department', presentation: 'external' },
]
