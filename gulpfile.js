var gulp = require("gulp");
var webserver = require("gulp-webserver");
var sass = require("gulp-sass");
gulp.task("sass", function() {
    return gulp.src("./src/resoult/scss/*.scss").pipe(sass()).pipe(gulp.dest("./src/resoult/css"));
});
gulp.task("change", function() {
    return gulp.watch("./src/resoult/scss/*.scss", gulp.series("sass"))
})
gulp.task("server", function() {
    gulp.src("src").pipe(webserver({
        port: 8989,
        fallback: "index.html"
    }));
});
gulp.task("default", gulp.series("sass", "server", "change"));