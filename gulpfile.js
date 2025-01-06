const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
    scss: 'src/scss/**/*.scss',
    cssOutput: 'dist/css/',
    js: ['src/addons/**/*.js',
        'src/js/**/*.js'],
    jsOutput: 'dist/js/',
    images: 'src/assets/images/**/*',
    imagesOutput: 'dist/assets/images',
    fonts: 'src/assets/fonts/**/*',
    fontsOutput: 'dist/assets/fonts',
    html: 'src/*.html',
    htmlOutput: 'dist/'
};

// Compile SCSS to CSS
function styles() {
    return src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest(paths.cssOutput))
        .pipe(browserSync.stream());
}

// Minify and bundle JavaScript
function scripts() {
    return src(paths.js)
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest(paths.jsOutput))
        .pipe(browserSync.stream());
}

// Optimize Images
function images() {
    return src(paths.images, { encoding: false })
        .pipe(dest(paths.imagesOutput));
}

// Copy Fonts
function fonts() {
    return src(paths.fonts, { encoding: false })
        .pipe(dest(paths.fontsOutput));
}

// Copy HTML
function html() {
    return src(paths.html)
        .pipe(dest(paths.htmlOutput))
        .pipe(browserSync.stream());
}

// Clean Dist Folder
function clean() {
    return del(['dist/**', '!dist']);
}

// Watch for Changes
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    });
    watch(paths.scss, styles);
    watch(paths.js, scripts);
    watch(paths.images, images);
    watch(paths.fonts, fonts);
    watch(paths.html, html);
}

// Default Task
exports.default = series(
    clean,
    parallel(styles, scripts, images, fonts, html),
    watchFiles
);

// Build Task
// exports.build = series(
//     clean,
//     parallel(styles, scripts, images, fonts, html)
// );