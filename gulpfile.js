var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('less', async function(done) {
    gulp.src("src/less/main.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', async function(done) {

    browserSync.init({
        server: "src/"
    });
    gulp.watch("src/**/*.less", gulp.series('less'));
    gulp.watch("src/**/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
    // gulp.watch("src/**/*.css").on('change', () => {
    //   browserSync.stream();
    //   done();
    // });

  

    done();
});

gulp.task('default', gulp.series(['less', 'serve']));