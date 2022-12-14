// Config Interface:
export interface Config {
  github: string;
  linkedin: string;
  twitter: string;
  projects: Project[];
  frameworks:Partial <Framework[]>;
  resume: Resume[];
}

export interface Project {
  project: string;
  description: string;
  logo?: string;
  background?: string;
  link?: string;
  repo?: string
}

export interface Framework {
  project:string;
  frameworkTitle: string;
  frameworkLogo: string;
}

export interface Resume {
  title: string;
  company: string;
  date: string;
  description: string;
}