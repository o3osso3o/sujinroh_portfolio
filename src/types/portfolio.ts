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
  name: string
  project_type: string | null
  presentation: 'modal' | 'external'
  summary: string | null
  keywords: string[]
  my_role: string | null
  contribution: Contribution | null
  tools: string[]
  image: { src: string; alt: string; width: number; height: number } | null
  process_url: string | null
  live_url: string | null
}
