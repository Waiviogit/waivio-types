import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['lodash', 'mongoose'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  target: 'node16',
  platform: 'node',
  esbuildOptions(options) {
    options.keepNames = true;
    return options;
  },
}); 