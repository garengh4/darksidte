import azure from 'svelte-adapter-azure-swa';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: azure()
  }
};

export default config;
