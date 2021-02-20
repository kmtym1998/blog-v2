/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

import { join } from 'path';

export function webpack(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    src: join(__dirname, 'src/'),
  };
  return config;
}
