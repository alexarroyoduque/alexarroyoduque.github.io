import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// problems with Gulp 5 & image-min 9, I use Gulp 4
// https://github.com/sindresorhus/gulp-imagemin/issues/384
function optimizeImages() {
  return gulp.src('build/default/src/images/**/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(gulp.dest('build/default/src/images'));
}

export default optimizeImages;
