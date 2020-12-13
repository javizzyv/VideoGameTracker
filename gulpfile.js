const gulp = require('gulp');
const mocha = require('gulp-mocha');
const run = require('gulp-run');


gulp.task('test', async function() {
    gulp.src('test/test.js')
    .pipe(mocha());

    gulp.src('test/index-test.js')
    .pipe(mocha());
});

gulp.task('install', async function(cb) {   // Aún no hay que instalar nada en concreto para el uso de Fastify
    /*gulp.src('./')
        .pipe(run('npm install'));*/
    cb();
})

gulp.task('start', async function() {
    gulp.src('./')
        .pipe(run('npm start'));
});

gulp.task('build', async function(cb) {     // Aún no hay que montar nada en concreto para el uso de Fastify
    cb();
});

//const build = gulp.series(/*['install'], ['test']*/);

exports.default = function(cb) {
    cb();
}

//exports.build = build;