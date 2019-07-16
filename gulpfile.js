const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minifyCSS = require('gulp-clean-css'),
        sourcemaps = require('gulp-sourcemaps');
        pump = require('pump'),
        babel = require('gulp-babel'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        server = require('gulp-server-livereload'),
        gcmq = require('gulp-group-css-media-queries');

// const path = {
//     css: [
//         'app/css/vendors/owl.carousel.min.css',
//         'app/css/vendors/owl.theme.default.min.css',
//     ],
//     js: [
//         'app/js/vendors/bootstrap.min.js',
//         'app/js/vendors/owl.carousel.min.js',
//     ]
// };
const path_dest = {
    css: 'css'
};

//Server
gulp.task('server', () => {
    gulp.src('./')
        .pipe(server({
            port: 8000,
            livereload: true,
            open: true
        }));
});

//Sass
function css() {
  return gulp
        .src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path_dest.css));
};

// Watch files
function watch() {
  gulp.watch("scss/**/*.scss", css);
}

var build = gulp.parallel('server', css, watch);

gulp.task(build);

gulp.task('default', build);