const gulp = require('gulp');
const mocha = require('gulp-mocha');
//const run = require('gulp-run');
const gulpI = require('gulp-shell');

gulp.task('test', async function() {
    gulp.src('test/test.js')
    .pipe(mocha());
});


gulp.task('install', gulpI.task(['npm install']));


/*gulp.task('install', async function() {
    gulp.src('./')
        .pipe(run('npm install'));
})*/

exports.default = function(cb) {
    cb();
}