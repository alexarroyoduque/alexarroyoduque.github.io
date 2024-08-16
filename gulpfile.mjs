import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// problems with Gulp 5 & image-min 9, I use Gulp 4
// https://github.com/sindresorhus/gulp-imagemin/issues/384
function optimizeImages() {
  return gulp.src('dist/images/**/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

export default optimizeImages;
