// Config Interface:
export interface Config {
  github: string;
  twitter: string;
  linkedin: string;
  projects: Project[];
}

export interface Project {
  projectTitle: string;
  projectDescription?: string;
  projectLogo?: string;
  framework?: string;
  frameworkLogo?: string;
  link?: string;
  repo?: string
}
