'use strict';

const SPRITE_PATH = './client/components/css';
const RELEASE = './build/Release';

const gulp = require('gulp');
const spriteSmith = require('gulp.spritesmith');
const exec = require('child_process').execSync;
const del = require('del');
const zip = require('gulp-zip');
const mockServer = require('gulp-mock-server');

gulp.task('sprite', () => {
    const spriteData = gulp.src(`${SPRITE_PATH}/imgs/` + '*.png')
        .pipe(spriteSmith({
            imgName: 'sprite.png',
            cssName: 'sprite.less',
        }));
    return spriteData.pipe(gulp.dest(`${SPRITE_PATH}`));
});

gulp.task('build', () => {
    return exec('npm run build', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

gulp.task('zipAndClean', ['build', 'zip'], () => {
    return del([RELEASE]).then(paths => {
        console.log('Deleted release source folder\n', paths.join('\n'));
    });
});

gulp.task('zip', () => {
    return gulp.src(RELEASE + '/*').pipe(zip('release.zip')).pipe(gulp.dest('.'));
});

gulp.task('default', ['zipAndClean']);

gulp.task('mock', () => {
    return gulp.src('.').pipe(mockServer({
        port: 9000
    }));
});
