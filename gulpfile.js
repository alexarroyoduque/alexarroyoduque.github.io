var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    usemin = require('gulp-usemin'),
    debug = require('gulp-debug');


var path = {
    app: './app/',
    styles: './app/src/styles/*.scss',
    css: './app/',
    jade: './app/src/jade/{,*/}*.jade',
    audio: './app/src/audio/{,*/}*.mp3',
    fonts: './app/src/font/{,*/}*.{eot,svg,ttf,woff}',
    images: './app/src/images/{,*,*/*}/*.{jpg,png,gif,ico}',
    html: './app/views/',
    dist: './dist'
};

gulp.task('styles', function () {
    gulp.src(path.styles)
        .pipe(sass())
        .pipe(gulp.dest(path.css));
});

gulp.task('jade', function () {
    var options = {
        pretty: true
    }
    gulp.src(path.jade)
        .pipe(jade())
        .pipe(jade(options))
        .pipe(gulp.dest(path.html));
});

gulp.task('watch-jade', function () {
    gulp.watch(path.jade, ['jade']);
});

gulp.task('watch-styles', function () {
    gulp.watch(path.styles, ['styles']);
});

gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('clean-views', function () {
    return gulp.src(path.html, {
            read: false
        })
        .pipe(clean());
});

gulp.task('clean-dist', function () {
    return gulp.src(path.dist, {
            read: false
        })
        .pipe(clean());
});

gulp.task('css-min', function () {
    gulp.src([
        path.app + '/bower_components/angular-material/angular-material.css',
        path.css + '/*.css'])
        .pipe(concat('main.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(path.dist));
});

gulp.task('dist-audio', function () {
    gulp.src(path.audio)
        .pipe(gulp.dest(path.dist + '/src/audio'));
});

gulp.task('dist-images', function () {
    return gulp.src(path.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.dist + '/src/images'));
});

gulp.task('dist-jade', function () {
    var options = {
        pretty: false
    }
    gulp.src(path.jade)
        .pipe(jade())
        .pipe(jade(options))
        .pipe(gulp.dest(path.dist + '/views'));
});

gulp.task('dist-fonts', function () {
    gulp.src(path.fonts)
        .pipe(gulp.dest(path.dist + '/src/font'));
});

gulp.task('dist-scripts', function () {
    gulp.src([path.app + "/bower_components/angular/angular.min.js"])
        .pipe(uglify())
        .pipe(gulp.dest(path.dist + '/src/scripts/components.js'));
});

gulp.task('dist-bower', function () {
    gulp.src([
        path.app + '/bower_components/angular/angular.min.js',
        path.app + '/bower_components/angular-animate/angular-animate.min.js',
        path.app + '/bower_components/angular-aria/angular-aria.min.js',
        path.app + '/bower_components/angular-material/angular-material.min.js',
        path.app + '/bower_components/angular-route/angular-route.min.js'])
        .pipe(concat('lib.min.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(path.dist + '/src/scripts/'));
});

gulp.task('dist-scripts', function () {
    gulp.src([
        path.app + '/src/js/konami.js',
        '/app.js',
        path.app + '/src/js/infoService.js',
        path.app + '/src/js/directives.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(path.dist + '/src/scripts/'));
});

gulp.task('dist-index', function () {
    gulp.src(path.app + 'index.html')
        .pipe(usemin({
            html: [htmlmin({
                collapseWhitespace: true
            })]
        }))
        .pipe(gulp.dest(path.dist));
});

gulp.task('serve', ['jade', 'styles', 'webserver', 'watch-jade', 'watch-styles']);
gulp.task('build', [
    'dist-jade',
    'styles',
    'css-min',
    'dist-audio',
    'dist-images',
    'dist-fonts',
    'dist-bower',
    'dist-scripts',
    'dist-index'
]);

gulp.task('default', ['serve']);
gulp.task('clean', ['clean-dist']);
gulp.task('dist', ['build']);