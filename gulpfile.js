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

const path = {
    css: [
        'app/css/vendors/owl.carousel.min.css',
        'app/css/vendors/owl.theme.default.min.css',
    ],
    js: [
        'app/js/vendors/bootstrap.min.js',
        'app/js/vendors/owl.carousel.min.js',
    ]
};
const path_dest = {
    css: 'app/css/public',
    js: 'app/js/public'
};

function concat_files(srcObj, nameFile, cb){
    pump([
        gulp.src(srcObj),
        concat(nameFile),
        uglify(),
        gulp.dest(path_dest.js)
    ],
        cb
    );
}

//Sass
gulp.task('sass', () => {
    gulp.src('app/css/src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path_dest.css));
});

//Js compress
gulp.task('js_task', (cb) => {
    pump([
        gulp.src('app/js/src/*.js').pipe(babel({
            presets: ['env']
        })),
        uglify(),
        gulp.dest(path_dest.js)
    ],
        cb
    );
});

//Css vendors
gulp.task('css_vendor', () => {
    gulp.src(path.css)
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path_dest.css));
});

//Js vendors
gulp.task('js_vendor', (cb) => {
    pump([
        gulp.src(path.js),
        concat('vendor.min.js'),
        uglify(),
        gulp.dest(path_dest.js)
    ],
        cb
    );
});

//Babel
// gulp.task('babel_task', () => {
//     gulp.src('app/js/src/*.js')
        
//         .pipe(gulp.dest(path_dest.js))    
// });

//Server
gulp.task('server', () => {
    gulp.src('app')
        .pipe(server({
            port: 8000,
            livereload: true,
            open: true
        }));
});

//Default
gulp.task('default', ["server"], () => {
    gulp.watch('app/css/src/*.scss', ['sass']);
    gulp.watch('app/css/vendors/*.css', ['css_vendor']);
    //gulp.watch('app/js/src/*.js', ['babel_task']);
    gulp.watch('app/js/src/*.js', ['js_task']);
    gulp.watch('app/js/vendors/*.js', ['js_vendor']);
});