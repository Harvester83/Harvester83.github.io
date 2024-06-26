const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");

function scriptDev() {
  return src(["src/components/**/*.js", "src/js/resume.js"])
    .pipe(map.init())
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(map.write("../sourcemaps"))
    .pipe(dest("./js/"))
    .pipe(bs.stream());
}

module.exports = scriptDev;
