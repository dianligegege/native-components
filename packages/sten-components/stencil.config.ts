import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'sten-components',
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // vueOutputTarget({
    //   componentCorePackage: 'sten-components',
    //   proxiesFile: '../vue-lib/components.ts',
    // }),
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [
    sass()
  ]
};
