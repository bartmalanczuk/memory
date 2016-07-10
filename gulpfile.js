var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();

var config = {
  paths: {
    html: './src/*.html',
    js: './src/scripts/**/*.js',
    images: './src/images/*',
    css: [
      './src/styles/flexboxgrid.css',
      './src/styles/main.css'
    ],
    mainJs: './src/scripts/main.js',
    dist: './dist'
  }
};

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/styles'))
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html'])
  gulp.watch(config.paths.js, ['js'])
  gulp.watch(config.paths.css, ['css'])
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: config.paths.dist
    }
  });
});

gulp.task('default', ['html', 'js', 'css', 'images', 'watch', 'browser-sync']);
