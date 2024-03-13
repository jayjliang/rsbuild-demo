import path from 'path';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: ({ entryName }) => {
      const templates = {
        index: './public/index.hbs',
      };
      return templates[entryName] || '';
    },
  },
  source: {
    entry: {
      index: './src/index.jsx',
    },
  },
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.hbs$/,
            loader: require.resolve('handlebars-loader'),
            options: {
              precompileOptions: {
                knownHelpersOnly: false,
              },
              runtime: path.resolve(__dirname, './plugins/rsbuild-plugin-handlebars/handlebars'),
            },
          },
        ],
      },
    },
  },
});