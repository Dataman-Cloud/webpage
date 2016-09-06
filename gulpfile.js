var gulp = require('gulp');
var ect = require('gulp-ect'); // ect模板
var htmlmin = require('gulp-htmlmin'); // html压缩
var cleanCSS = require('gulp-clean-css'); //css 压缩
var uglify = require('gulp-uglify'); // js压缩
var RevAll = require('gulp-rev-all'); // 防止css缓存
var useref = require('gulp-useref'); // css,js 合并
var rename = require("gulp-rename"); // 文件重命名
var clean = require('gulp-clean'); // 删除文件
var gulpif = require('gulp-if'); // Conditionally run a task
var rev = require('gulp-rev-hash'); // 防止html缓存


gulp.task('copy-conf', function () {
    gulp.src('./conf.js')
        .pipe(gulp.dest('build/'));
});
gulp.task('copy-pics', ['copy-conf'], function () {
    gulp.src(['pics/*', 'pics/**/*'])
        .pipe(gulp.dest('build/pics/'));
});

gulp.task('copy-fonts', ['copy-pics'], function () {
    var sources = ['fonts/*'];
gulp.src(sources)
    .pipe(gulp.dest('build/fonts'));
});



gulp.task('html-replace', function () {

    var revAll = new RevAll({dontRenameFile: ['.html'], dontUpdateReference: ['.html']});
    return gulp.src('./common.html')
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(useref())
        .pipe(revAll.revision())
        .pipe(gulp.dest('build/replace'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('build/replace'));
});
gulp.task('compressjs',['html-replace'], function() {
    return gulp.src('build/replace/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/replace/js/'));
});

gulp.task('copy-common_views', ['compressjs'], function () {
    var sources = ['common_views/*'];
    gulp.src(sources )
        .pipe(gulp.dest('build/replace/common_views'));
});

gulp.task('copy-static', ['copy-common_views'] ,function () {
    var sources = ['static_views/*','static_views/**/*'];
    gulp.src(sources)
        .pipe(gulp.dest('build/replace/static_views'));
});

gulp.task('build',['copy-static']);

gulp.task('ectHtml', function(){
    var rootPath = './build/replace/static_views/';
    var relativePathArray = ['*.html', 'solution/*.html', 'companyapp/*.html', 'scene/*.html', 'about/*.html'];

    var absolutePathArray = [];
    for(var i=0; i < relativePathArray.length; i++) {
        absolutePathArray.push(rootPath + relativePathArray[i]);
    }

    return gulp.src(absolutePathArray, {read: false})
        .pipe(ect({ext: '.html'}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/'));
});


gulp.task('copy-js',['ectHtml'] ,function() {
    var sources = './build/replace/js/*';
    gulp.src(sources)
        .pipe(gulp.dest('build/js'));
});

gulp.task('copy-css',['copy-js'],function() {
    var sources = './build/replace/css/*';
    gulp.src(sources)
        .pipe(gulp.dest('build/css'));
});

gulp.task('rev',['copy-css'], function () {
    gulp.src('build/*.html')
        .pipe(rev())
        .pipe(gulp.dest('build/'))
});

gulp.task('clean', function (cb) {
    var sources = 'build/replace';
    return gulp.src(sources, {read: false})
        .pipe(clean());
});

gulp.task('default',['copy-fonts','rev'] );









// 开发测试
gulp.task('copy-cssdev', function () {
    gulp.src(['css/*'])
        .pipe(gulp.dest('dev/css'));
});
gulp.task('copy-jsdev',['copy-cssdev'], function () {
    gulp.src(['conf.js','common.js','service.js', 'starfield.js'])
        .pipe(gulp.dest('dev/'));
});

gulp.task('copy-picsdev', ['copy-jsdev'], function () {
    gulp.src(['pics/*', 'pics/**/*'])
        .pipe(gulp.dest('dev/pics/'));
});

gulp.task('copy-fontsdev', ['copy-picsdev'], function () {
    var sources = ['fonts/*'];
    gulp.src(sources)
        .pipe(gulp.dest('dev/fonts'));
});



gulp.task('dev',['copy-fontsdev'], function(){
    var rootPath = 'static_views/';
    var relativePathArray = ['*.html', 'solution/*.html', 'companyapp/*.html', 'scene/*.html', 'about/*.html'];

    var absolutePathArray = [];
    for(var i=0; i < relativePathArray.length; i++) {
        absolutePathArray.push(rootPath + relativePathArray[i]);
    }

    return gulp.src(absolutePathArray)
        .pipe(ect({ext: '.html'}))
        .pipe(gulp.dest('dev/'));
});
