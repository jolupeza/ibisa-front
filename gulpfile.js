const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      cssnano = require('gulp-cssnano'),
      argv = require('yargs').argv,
      gulpIf = require('gulp-if'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      imagemin = require('gulp-imagemin'),
      del = require('del'),
      browserify = require('browserify'),
      transform = require('vinyl-source-stream'),
      sync = require('browser-sync').create();

let isProduction;
if (argv.prod) {
  isProduction = true;
} else {
  isProduction = false;
}

let config = {
  template: './app',
  scssDir: './app/scss',
  cssDir: './app/css',
  jsDir: './app/js',
  imgDir: './app/images',
};

let autoprefixBrowsers = ['> 1%', 'last 2 versions', 'IE 9', 'IE 10', 'IE 11'];

gulp.task('style', () => {
  return gulp.src(config.scssDir + '/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(autoprefixer({
        browsers: autoprefixBrowsers,
        cascade: false
      }))
      .pipe(gulpIf(isProduction, cssnano(), sourcemaps.write('maps')))
      .pipe(gulp.dest(config.cssDir))
      .pipe(sync.stream())
});

gulp.task('concat', () => {
  return gulp.src([
    //config.jsDir + '/start.js',
    config.jsDir + '/main.js',
    //config.jsDir + '/end.js'
  ])
  .pipe(concat('script.js'))
  .pipe(gulp.dest(config.jsDir))
});

gulp.task('compress', ['concat'], () => {
  return gulp.src(config.jsDir + '/script.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(config.jsDir + '/min'))
});

gulp.task('imagemin', () => {
  return gulp.src([
      config.imgDir + '/*.+(png|jpg|jpeg)',
      //'!' + config.imgDir + '/cabo-14.jpg'
    ])
    .pipe(imagemin())
    .pipe(gulp.dest(config.imgDir + '/'))
});

gulp.task('cleanup', () => {
  del(config.cssDir + '/maps/*');
  del(config.cssDir + '/maps/');
});

gulp.task('browserify', () => {
  return browserify(config.jsDir + '/src/main.js')
    .bundle()
    .pipe(transform('bundle.js'))
    .pipe(gulp.dest(config.jsDir + '/min/'))
});

gulp.task('minifyjs', ['browserify'], () => {
  return gulp.src(config.jsDir + '/min/bundle.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(config.jsDir + '/min/'));
});

gulp.task('js-sync', ['compress'], () => {
  sync.reload();
});

gulp.task('browsersync', ['compress', 'style'], () => {
  sync.init({
    proxy: "ibisa.front",
    browser: "chrome"
    //browser: ["chrome", "firefox"]
  });

  gulp.watch([config.template + '/*.html', config.scssDir + '/**/*.scss']).on('change', sync.reload);
  gulp.watch(config.scssDir + '/**/*.scss', ['style']);
  gulp.watch(config.jsDir + '/*.js', ['js-sync']);
});

//gulp.task('default', () => {
//  gulp.watch(config.scssDir + '/**/*.scss', ['style']);
//});

/*gulp.task()
gulp.src()
gulp.dest()
gulp.watch()*/
