const plugins = [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
];

const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");

async function styleLib(done) {
  const { default: chalk } = await import("chalk");

  if (plugins.length > 0) {
    return src(plugins)
      .pipe(map.init())
      .pipe(
        sass({
          outputStyle: "compressed",
        }).on("error", sass.logError)
      )
      .pipe(concat("libs.min.css"))
      .pipe(map.write("../sourcemaps/"))
      .pipe(dest("./css/"));
  } else {
    return done(
      console.log(
        chalk.bgYellow(
          `${chalk.bold("WARNING!")} You did not add any CSS/SCSS plugins.`
        )
      )
    );
  }
}

module.exports = styleLib;
