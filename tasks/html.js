const { src, dest } = require("gulp");
const include = require("gulp-file-include");
const bs = require("browser-sync");

function html() {
  return src(["src/**/*.html", "!!src/components/**/*.html"])
    .pipe(include())
    .pipe(dest("./"))
    .pipe(bs.stream());
}

module.exports = html;
