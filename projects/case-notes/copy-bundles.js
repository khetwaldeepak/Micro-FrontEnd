//
// This script copies over UMD bundles to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node projects/client-b//copy-bundles.js
//

const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js', 'projects/client-b/src/assets', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js', 'projects/case-notes/src/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', 'projects/case-notes/src/assets/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js', 'projects/case-notes/src/assets/core-js', {}, _ => {});

