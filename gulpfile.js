const gulp = require('gulp');
const gulpImagemin = require('gulp-imagemin');

gulp.task('ImageRecize', async () => {
  const projectDirectory = './src/assets/images/**/*';
  const buildDirectory = './build/images/';
  await gulp.src(projectDirectory)
    .pipe(gulpImagemin())
    .pipe(gulp.dest(buildDirectory))
});