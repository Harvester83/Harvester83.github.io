const gulp = require("gulp");
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

exports.style = tasks.style;
exports.styleLib = tasks["style-lib"];
exports.scriptDev = tasks["script-dev"];
exports.scriptLib = tasks["script-lib"];
exports.html = tasks.html;
exports.browserSyncHTML = tasks["browser-sync-html"];
exports.watch = tasks.watch;

exports.default = gulp.parallel(
  exports.style,
  exports.styleLib,
  exports.scriptDev,
  exports.scriptLib,
  exports.html,
  exports.browserSyncHTML,
  exports.watch
);
