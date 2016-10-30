/*
 * 所有开发时候用到的功能
 * */
const gulp = require('gulp');
const less = require('gulp-less'); //less编译
const browserSync = require('browser-sync').create(); //实时刷新
const reload = browserSync.reload;
//less编译
gulp.task('less', function () {
    gulp.src('build/static/style/*.less')
        .pipe(less())
        .pipe(gulp.dest('build/static/style'))
        .pipe(reload({
            stream: true
        }));
}); //设置css注入

//监测文件变化，实时刷新
gulp.task('default', ['less'], function () {
    browserSync.init({
        server: {
            baseDir: './build' //设置服务器的根目录
        },
        logLevel: "debug",
        logPrefix: "dev",
        browser: 'chrome',
        notify: false //开启静默模式
    });
    //使用gulp的监听功能，实现编译修改过后的文件
    gulp.watch('build/static/style/*.less', ['less']);
    gulp.watch(('build/*.html')).on('change', reload);
});