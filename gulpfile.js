const gulp = require('gulp');
const mocha = require('gulp-mocha');
const run = require('gulp-run');


gulp.task('test', async function() {
    gulp.src('test/test.js')
    .pipe(mocha());
});

gulp.task('install', async function() {
    process.stdout.write(gulp.src('./')
        .pipe(run('npm install'))
        .pipe(gulp.dest('./')));
})

exports.default = async function(cb) {
    cb();
}