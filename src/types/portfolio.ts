export interface Profile {
  name_ko: string
  name_en: string
  email: string
  storytelling_url: string | null
}

export interface Contribution {
  planning: number | null
  design: number | null
  development: number | null
}

export interface Project {
  id: string
  order: number
  name: string
  subtitle: string
  project_type: string | null
  presentation: 'modal' | 'external'
  summary: string | null
  description: string | null
  keywords: string[]
  my_role: string | null
  contribution: Contribution | null
  tool_groups?: { label: string; items: string[] }[]
  tools: string[]
  thumbnail: ProjectImage | null
  image: ProjectImage | null
  process_url: string | null
  live_url: string | null
  external_url: string | null
}

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
  fit?: 'contain' | 'cover'
  position?: string
}

export interface ProfileEntry {
  id: string
  name: string
  detail: string | null
  date_label: string
}

export interface Skill {
  name: string
  text_mark: string
  icon_src: string | null
}

export interface SkillGroup {
  name: string
  items: Skill[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string | null
}

export interface ProfileImage {
  src: string
  alt: string
  width: number
  height: number
}
