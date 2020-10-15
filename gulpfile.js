const gulp = require('gulp');
const mocha = require('gulp-mocha');
const run = require('gulp-run');

exports.default = async function() {
    gulp.src('test')
        .pipe(mocha());
    
    process.stdout.write(gulp.src('./')
        .pipe(run('npm install')));
}