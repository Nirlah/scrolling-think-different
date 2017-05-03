const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

gulp.task('default', ['style', 'script', 'assets']);

gulp.task('watch', function() {
    // Style
    gulp.watch('./style.scss', ['style']);

    // Script
    gulp.watch('./script/**/*.js', ['script']);
});

gulp.task('style', function() {
    return gulp.src('./style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('script', function() {
    const files = [
        './script/scene.js',
        './script/scenes/*.js',
        './script/*.js'
    ];

    return gulp.src(files)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('assets', function() {
    const assets = [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/d3/d3.min.js',
        './bower_components/normalize-css/normalize.css'
    ];

    gulp.src(assets)
        .pipe(gulp.dest('./dist'));
});
