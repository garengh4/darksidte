// Config Interface:
export interface Config {
  github: string;
  twitter: string;
  linkedin: string;
  projects: Project[];
  frameworks: Framework[];
}

export interface Project {
  project?: string;
  description?: string;
  logo?: string;
  background?: string;
  link?: string;
  repo?: string
}

export interface Framework {
  project?: string;
  frameworkTitle?: string;
  frameworkLogo?: string;
}