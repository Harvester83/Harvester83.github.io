const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const concat = require("gulp-concat");

function scriptBuild() {
  return src(["src/components/**/*.js", "src/js/resume.js"])
    .pipe(uglify())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.min.js"))
    .pipe(dest("./js/"));
};

module.exports = scriptBuild
