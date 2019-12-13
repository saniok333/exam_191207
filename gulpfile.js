var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssbeautify = require("gulp-cssbeautify");

gulp.task("compile", () => {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer(
        // {
        //   overrideBrowserslist: ["last 4 version"]
        // },
        {
          cascade: false
        }
      )
    )
    .pipe(cssbeautify())
    .pipe(gulp.dest("./css"));
  // .pipe(
  //   gulp.dest(file => {
  //     return file.base;
  //   })
  // )
});

gulp.task("watch", () => {
  return gulp.watch("./scss/**/*.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile"));
