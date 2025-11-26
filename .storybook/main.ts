import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  // configure the alias for apgu-filters to point to ROOT/src/external/apgu-filters/src/index.ts
  viteFinal: async (config, { configType }) => {
    if (!config.resolve) {
      config.resolve = { alias: {} };
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias['apgu-filters'] = path.resolve(dirname, '../src/external/apgu-filters/src/index.ts');
    return config;
  }
};
export default config;