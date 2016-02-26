var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var RevAll = require('gulp-rev-all');
var rename = require('gulp-rename');
var useref = require('gulp-useref');
var clean = require('gulp-clean');
var gulpif = require('gulp-if');
var rev = require('gulp-rev-hash');
var jslint = require('gulp-jslint-simple');

var angularTemplatecache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var inject = require('gulp-inject');

gulp.task('copy-conf', function() {
    gulp.src('js/conf.js')
        .pipe(gulp.dest('build/js/'));
});

gulp.task('copy-pics', ['copy-conf'], function() {
    gulp.src(['pics/*', 'pics/**/*'])
        .pipe(gulp.dest('build/pics/'));
});

gulp.task('copy-fonts', ['copy-pics'], function() {
    var sources = ['fonts/*'];
    gulp.src(sources)
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('template-min', function () {
    var htmlSrc = [
        'common_views/*.html', 
        'components/**/*.html',
        'static_views/*.html',
        'static_views/**/*.html'
    ];
    return gulp.src(htmlSrc)
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(angularTemplatecache('templateCacheHtml.js', {
            module: 'webpage'
        }))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('html-replace', ['template-min'], function() {

    var templateInjectFile = gulp.src('build/js/templateCacheHtml.js', { read: false });
    var templatenjectOptions = {
        starttag: '<!-- inject:template.js  -->',
        addRootSlash: false
    };

    var assets = useref.assets();
   // var options = {collapseWhitespace: true};
    var revAll = new RevAll();
    return gulp.src('index.html')
        .pipe(inject(templateInjectFile, templatenjectOptions))
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref().on('error', gutil.log))
        .pipe(revAll.revision().on('error', gutil.log))
        .pipe(gulp.dest('build/'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('build/'));
});

gulp.task('html-rename', ['html-replace'], function() {
    gulp.src('build/index.*.html')
      .pipe(rename('index.html').on('error', gutil.log))
      .pipe(gulp.dest('build/'));
});

gulp.task('clean', ['html-rename'], function() {
    var sources = [
      'build/index.**.html'
    ];
    return gulp.src(sources, {read: false})
        .pipe(clean());
});

gulp.task('rev', function() {
    gulp.src('build/index.html')
        .pipe(rev())
        .pipe(gulp.dest('build/'))
});

gulp.task('default', ['clean', 'copy-fonts']);
