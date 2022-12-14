import type { Config } from '$lib/types';

import projectLists from "$lib/data/projects.json"
import frameworkLists from "$lib/data/frameworks.json"
import resumeLists from "$lib/data/resume.json"

// App Content & Configuration:
export const config: Config = {
  github: 'garengh4',
  linkedin:'garen-goh-74015512a/',
  twitter: 'ncookie_eth',
  projects: projectLists,
  frameworks: frameworkLists,
  resume: resumeLists
};