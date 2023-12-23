/* Tasks */

const { src, dest, watch} = require("gulp");

const sass = require('gulp-sass')(require('node-sass'));
function css() {
  return src("./src/scss/*.scss")
    .pipe(concat('styles.css'))
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./assets/"));
}
exports.css = css;

const uglify = require("gulp-uglify");
const concat = require('gulp-concat');
function js() {
    return src("./src/js/*.js")
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest("./assets/"));
}
exports.js = js;

exports.watch = function () {
    watch("./src/scss/*.scss", css);
    watch("./src/js/*.js", js);
};