const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['index.ts'],
  bundle: true,
  outfile: 'bundle.js',
  platform: 'browser'
}).catch(() => process.exit(1));

