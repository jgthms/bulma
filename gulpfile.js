var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    plugins = [
      require('autoprefixer')()
    ];

var pathToFolders = {
  SOURCEMAP: '../css',
  CSS: './css'
};

var buildType = {
  EXPANDED: 'expanded',
  COMPRESSED: 'compressed'
};

var cssPaths = {
  EXPANDED: './css/bulma.css',
  COMPRESSED: './css/bulma.min.css'
};

var bootstrapFile = './bulma.sass';

var outputFilesName = {
  EXPANDED: 'bulma.css',
  COMPRESSED: 'bulma.min.css'
}

function buildSassWithType(type, outputFileName){
  return gulp.src(bootstrapFile)
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: type}).on('error', sass.logError))
      .pipe(rename(outputFileName))
      .pipe(sourcemaps.write(pathToFolders.SOURCEMAP, {
        debug: true,
        charset: 'utf8'
      }))
      .pipe(gulp.dest(pathToFolders.CSS));
}

function runAutoprefixCSSFile(pathToCSSFile){
  return gulp.src(pathToCSSFile)
            .pipe(postcss(plugins))
            .pipe(gulp.dest(pathToFolders.CSS));

}

// Development
gulp.task('build-sass-expanded', function () {
  buildSassWithType(buildType.EXPANDED, outputFilesName.EXPANDED);
});

gulp.task('autoprefix-expanded', function () {
  runAutoprefixCSSFile(cssPaths.EXPANDED);
});

// Production
gulp.task('build-sass-compressed', function () {
  buildSassWithType(buildType.COMPRESSED, outputFilesName.COMPRESSED);
});

gulp.task('autoprefix-compressed', function () {
  runAutoprefixCSSFile(cssPaths.COMPRESSED);
});

// Watch Change Sass files
gulp.task('watch-sass', function () {
  gulp.watch('./bulma/**/*.sass', ['build-sass-expanded']);
});

// Register Tasks
gulp.task('expanded', ['build-sass-expanded', 'watch-sass', 'autoprefix-expanded']);
gulp.task('compressed', ['build-sass-compressed', 'autoprefix-compressed']);
gulp.task('build', ['build-sass-expanded', 'autoprefix-expanded', 'build-sass-compressed', 'autoprefix-compressed']);
