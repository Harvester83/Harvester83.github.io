const plugins = [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/jquery.easing/jquery.easing.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
];

const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");

async function scriptLib(done) {
  const { default: chalk } = await import("chalk");

  if (plugins.length > 0)
    return src(plugins)
      .pipe(map.init())
      .pipe(uglify())
      .pipe(concat("libs.min.js"))
      .pipe(map.write("../sourcemaps"))
      .pipe(dest("./js/"));
  else {
    return done(console.log(chalk.redBright("No added JS plugins")));
  }
}

module.exports = scriptLib;
