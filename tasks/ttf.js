const { src, dest } = require("gulp");
const ttf2woff2 = require("gulp-ttftowoff2");
const ttf2woff = require("gulp-ttf2woff");

async function ttf(done) {
  const { default: changed } = await import("gulp-changed");

  await new Promise((resolve, reject) => {
    src("src/fonts/**/*.ttf")
      .pipe(
        changed("./fonts/", {
          extension: ".woff2",
          hasChanged: changed.compareLastModifiedTime,
        })
      )
      .pipe(ttf2woff2())
      .pipe(dest("./fonts/"))
      .on("end", resolve)
      .on("error", reject);
  });

  await new Promise((resolve, reject) => {
    src("src/fonts/**/*.ttf")
      .pipe(
        changed("./fonts/", {
          extension: "woff",
          hasChanged: changed.compareLastModifiedTime,
        })
      )
      .pipe(ttf2woff())
      .pipe(dest("./fonts/"))
      .on("end", resolve)
      .on("error", reject);
  });

  done();
}

module.exports = ttf;
