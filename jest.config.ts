import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets/index.js';

const presetConfig = presets.createCjsPreset();

export default {
  ...presetConfig,
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
} satisfies Config;
