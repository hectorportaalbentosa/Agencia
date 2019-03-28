const Gulp = require('gulp');
const CleanCSS = require('gulp-clean-css');
const ImagesMin = require('gulp-imagemin');
const Uglify = require('gulp-uglify-es').default;
const Concat = require("gulp-concat");
const BrowserSync = require("browser-sync");




function compressCSS(){
    console.log('Llego al compressCSS');
    return Gulp.src('css/*.css').pipe(CleanCSS({compatibility: 'ie8'})).pipe(Gulp.dest('dist/css'));
}

function compressImg(){
    console.log('Llego al compressImg');
    return Gulp.src('img/*').pipe(ImagesMin()).pipe(Gulp.dest('dist/img'));
}

function compressJS(){
    console.log('Llego al compressJS');
    return Gulp.src('js/*.js').pipe(Concat('Scripts.min.js')).pipe(Uglify()).pipe(Gulp.dest('dist/js'));
}

Gulp.task('default',function(){
    BrowserSync.init({
        server:{
            baseDir: "./"
        }
    });
});

Gulp.watch(['js/*.js','css/*.css','img/*']).on('change',()=>{
    console.log('Se han realizado cambios en las imagenes');
    compressCSS();
    compressJS();
    compressImg();
});

Gulp.watch(['index.html','dist/**/*.js']).on('change', () => {
    console.log('Se han realizado cambios en el html y css');
    BrowserSync.reload();
})