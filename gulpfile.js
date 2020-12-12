const gulp = require('gulp');
const mocha = require('gulp-mocha');
const run = require('gulp-run');


gulp.task('test', async function() {
    gulp.src('test/test.js')
    .pipe(mocha());

    gulp.src('test/index-test.js')
    .pipe(mocha());
});

gulp.task('install', async function() {
    gulp.src('./')
        .pipe(run('npm install'));
})

gulp.task('start', async function() {
    gulp.src('./')
        .pipe(run('npm start'));
});

const build = gulp.series(['install'], ['test']);

exports.default = function(cb) {
    cb();
}

exports.build = build;