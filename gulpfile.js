var liveReload = require('gulp-livereload'),
    clean = require('rimraf'),
    gulp = require('gulp');

var config = {
    assets_path: './',
    build_path: './vendor'
};

config.bower_path = './bower_components';

config.build_path_js = config.build_path + '/js';
config.build_vendor_path_js = config.build_path;
config.vendor_path_js = [
    config.bower_path + '/jquery/dist/jquery.min.js',
    config.bower_path + '/bootstrap/dist/js/bootstrap.min.js',
    config.bower_path + '/angular/angular.min.js',
    config.bower_path + '/angular-ui-router/release/angular-ui-router.min.js',
    config.bower_path + '/angular-resource/angular-resource.min.js',
    config.bower_path + '/angular-animate/angular-animate.min.js',
];

config.build_path_css = config.build_path + '/css';
config.build_vendor_path_css = config.build_path;
config.vendor_path_css = [
    config.bower_path + '/bootstrap/dist/css/bootstrap.min.css',
    config.bower_path + '/bootstrap/dist/css/bootstrap-theme.min.css',
    config.bower_path + '/font-awesome/css/font-awesome.min.css',
];

config.build_path_html = config.build_path + '/views';
config.build_path_font = config.build_path + '/fonts';
config.build_path_image = config.build_path + '/images';

gulp.task('copy-styles', function() {
    gulp.src(config.vendor_path_css)
        .pipe(gulp.dest(config.build_vendor_path_css))
        .pipe(liveReload());
});

gulp.task('copy-scripts', function() {
    gulp.src(config.vendor_path_js)
        .pipe(gulp.dest(config.build_vendor_path_js))
        .pipe(liveReload());
});

gulp.task('clear-build-folder', function() {
    clean.sync(config.build_path);
});

gulp.task('default', ['clear-build-folder'], function() {
    elixir(function(mix) {
        mix.styles(config.vendor_path_css.concat([config.assets_path + '/css/**/*.css', './vendor/**/*.css']),
            'public/css/all.css', config.assets_path);
        mix.scripts(config.vendor_path_js.concat([config.assets_path + '/js/**/*.js', './vendor/**/*.js']),
            'public/js/all.js', config.assets_path);
        mix.version(['js/all.js', 'css/all.css'])
    });
});

gulp.task('watch-dev', ['clear-build-folder'], function() {
    liveReload.listen();
    gulp.start('copy-styles', 'copy-scripts');
    gulp.watch(config.assets_path + '/**', ['copy-styles', 'copy-scripts']);
});