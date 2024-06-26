const { src, dest } = require("gulp");
const recompress = require("imagemin-jpeg-recompress");
const bs = require("browser-sync").create();

async function image() {
  const changed = (await import("gulp-changed")).default;
  const imagemin = (await import("gulp-imagemin")).default;
  const gifsicle = (await import("imagemin-gifsicle")).default;
  const optipng = (await import("imagemin-optipng")).default;
  const svgo = (await import("imagemin-svgo")).default;
  const pngquant = (await import("imagemin-pngquant")).default;

  return src("src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)")
    .pipe(changed("./img"))
    //.pipe(imagemin([gifsicle(), optipng(), svgo()]))
    .pipe(dest("./img"))
    .pipe(bs.stream());
}

module.exports = image;
