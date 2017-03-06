// Requis
var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = 'js'; // dossier de travail
var destination = 'dist'; // dossier à livrer



gulp.task('scripts', function() {
    return gulp.src(source + '/*.js')
        .pipe(plugins.minify({
            ext: {
                src: '-debug.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(destination + '/'));
});

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});