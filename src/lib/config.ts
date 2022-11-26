import type { Config, Project, Framework } from '$lib/types';

import projectLists from "$lib/list-of-projects.json"
import frameworkLists from "$lib/list-of-frameworks.json"
// App Content & Configuration:
export const config: Config = {
  github: 'garengh4',
  linkedin:'garen-goh-74015512a/',
  twitter: 'ncookie_eth',
  projects: projectLists,
  frameworks: frameworkLists
};