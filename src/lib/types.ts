// Config Interface:
export interface Config {
  github: string;
  twitter: string;
  linkedin: string;
  projects: Project[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  link?: string;
  repo?: string
}