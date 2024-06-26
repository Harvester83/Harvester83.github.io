"use strict";

const { src, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const bulk = require("gulp-sass-bulk-importer");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");

// Асинхронная функция для динамического импорта gulp-autoprefixer
async function style() {
  const { default: autoprefixer } = await import("gulp-autoprefixer");

  return src("src/scss/**/*.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 8 versions"],
        browsers: [
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 11",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6",
        ],
      })
    )
    .pipe(
      clean({
        level: 2,
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(map.write("../sourcemaps/"))
    .pipe(dest("./css/"))
    .pipe(bs.stream());
}

module.exports = style;
