type Experience = {
  role: string
  company: string
  period: string
  location?: string
  bullets: string[]
}

type Education = {
  degree: string
  school: string
  year?: string
  location?: string
}

type Project = {
  name: string
  description?: string
  url?: string
}
export type { Experience, Education, Project }
