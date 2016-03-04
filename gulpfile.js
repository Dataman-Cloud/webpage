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
    gulp.src('conf.js')
        .pipe(gulp.dest('build/'));
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

//views html to js
gulp.task('template-min-static', function () {
    return gulp.src('static_views/**/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(angularTemplatecache('templateCacheHtmlStatic.js', {
            module: 'webpage',
            root: '/static_views'
        }))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('template-min-common', ['template-min-static'], function () {
    return gulp.src('common_views/**/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(angularTemplatecache('templateCacheHtmlCommon.js', {
            module: 'webpage',
            root: '/common_views'
        }))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('template-min-components', ['template-min-common'], function () {
    return gulp.src('components/**/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(angularTemplatecache('templateCacheHtmlComponent.js', {
            module: 'webpage',
            root: '/components'
        }))
        .pipe(gulp.dest('build/js/'));
    
    gulp.src('static_views/**/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(angularTemplatecache('templateCacheHtmlStatic.js', {
            module: 'webpage',
            root: '/static_views'
        }))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('html-replace', ['template-min-components'], function() {
    
    var templateInjectFile = gulp.src('build/js/templateCacheHtml*.js', { read: false });
    var templatenjectOptions = {
        starttag: '<!-- inject:template:js -->',
        addRootSlash: false
    };
    var assets = useref.assets();

    var revAll = new RevAll({dontRenameFile: ['.html'], dontUpdateReference: ['.html']});
    return gulp.src('index.html')
        .pipe(inject(templateInjectFile, templatenjectOptions))
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(revAll.revision())
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
      'build/index.**.html',
      'build/js/templateCacheHtml*.js'
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
