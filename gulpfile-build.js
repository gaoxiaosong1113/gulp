//引用的模块
var gulp = require('gulp');
//var rename = require('gulp-rename');                  //重新命名生成的css和js文件
var less = require('gulp-less'); //less编译
var uglify = require('gulp-uglify'); //压缩js
var clean = require('gulp-clean'); //清空文件夹里所有的文件
var rev = require('gulp-rev'); //生成带有哈希值的文件名
var runSequence = require('run-sequence'); //让task序列化
var reCollector = require('gulp-rev-collector'); //gulp-rev的插件，用于在生成带哈希值的文件名后替换html中的引用
var base64 = require('gulp-base64');
var config = require('../../config').base64;


//每次打包时先清空原有的文件夹
gulp.task('clean', function () {
    return gulp.src('public', {
            read: false
        })//这里设置的public表示删除public文件夹及其下所有文件
        .pipe(clean())

});

gulp.task('css',function(){
    return gulp.src(['build/static/style/*.less'])
        .pipe(less())
        .pipe(rev())  //文件加入版本号
        .pipe(gulp.dest('public/style/'))
        .pipe(rev.manifest())  //对应的版本号和原始文件用json表示出来
        .pipe(gulp.dest('public/json/css'));
});

gulp.task('js',function(){
    return gulp.src(['build/static/js/*.js'])
        .pipe(rev())  //文件加入版本号
        .pipe(gulp.dest('public/js/'))
        .pipe(rev.manifest())  //对应的版本号和原始文件用json表示出来
        .pipe(gulp.dest('public/json/js'));
});

gulp.task('js',function(){
    return gulp.src(['build/static/js/*.js'])
        .pipe(rev())  //文件加入版本号
        .pipe(gulp.dest('public/js/'))
        .pipe(rev.manifest())  //对应的版本号和原始文件用json表示出来
        .pipe(gulp.dest('public/json/js'));
});


//将处理过的css，js引入html
gulp.task('reCollector', function () {
    gulp.src(['public/json/**/*.json', './build/*.html'])
        .pipe(reCollector({
            replaceReved: true,
            dirReplacements: {
                'static/style/': 'style/',
                'static/js/': 'js/'
            }
        }))
        .pipe(gulp.dest('./public/'));
});
//进行打包上线
gulp.task('default', function () {
    runSequence('clean', 'css', 'js', 'reCollector');
});

gulp.watch('build/static/style/*.less', ['less']);
gulp.watch(('build/*.html')).on('change', function(event){
    runSequence('clean', 'css', 'js', 'reCollector');
});

