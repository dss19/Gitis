const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require('gulp-htmlmin');
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const browsersync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cache = require("gulp-cache");
const del = require("del");
const plumber = require("gulp-plumber");

/* Options
 * ------ */
const options = {
	html: {
		src: "app/html/**/*.html",
		dest: "public"
	},
	scripts: {
		src: "app/scripts/**/*.js",
		dest: "public/scripts"
	},
	styles: {
		src: "app/styles/**/*.sass",
		dest: "public/styles"
	},
	images: {
		src: "app/images/**/*.+(png|jpeg|jpg|gif|svg)",
		dest: "public/images"
	},
	fonts: {
		src: "app/fonts/*",
		dest: "public/fonts"
	},
	browserSync: {
		baseDir: "public"
	}
};

/* Browser-sync
 * ------------ */
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: options.browserSync.baseDir
		},
		port: 3000
	});
	done();
}

/* Styles
 * ------ */

function styles() {
	return gulp
		.src(options.styles.src)
		.pipe(
			plumber(function (err) {
				console.log("Styles Task Error");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(sass().on("error", sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 2 versions'],
				cascade: false,
				grid: true
			})
		)
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest(options.styles.dest))
		.pipe(
			browsersync.reload({
				stream: true
			})
		);
}

/* Scripts
 * ------ */

function scripts() {
	return gulp
		.src(options.scripts.src)
		.pipe(
			plumber(function (err) {
				console.log("Scripts Task Error");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest(options.scripts.dest))
		.pipe(
			browsersync.reload({
				stream: true
			})
		);
}

/* HTML
 * ------ */

function minify() {
	return gulp
		.src(options.html.src)
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest(options.html.dest))
		.pipe(
			browsersync.reload({
				stream: true
			})
		);
}

/* Images
 * ------ */

function images() {
	return gulp
		.src(options.images.src)
		.pipe(
			cache(
				imagemin({
					interlaced: true
				})
			)
		)
		.pipe(gulp.dest(options.images.dest));
}

/* Fonts
 * ------ */

function fonts() {
	return gulp.src(options.fonts.src).pipe(gulp.dest(options.fonts.dest));
}

/* Clean up
 * ------ */

async function clean() {
	return Promise.resolve(del.sync("public"));
}

function watchFiles() {
	gulp.watch(options.html.src, minify);
	gulp.watch(options.styles.src, styles);
	gulp.watch(options.scripts.src, scripts);
	gulp.watch(options.fonts.src, fonts);
	gulp.watch(options.images.src, images);
}

/* Build
 * ------ */
const build = gulp.series(
	clean,
	gulp.parallel(styles, minify, scripts, images, fonts)
);
const watch = gulp.parallel(watchFiles, browserSync);
// export tasks
exports.styles = styles;
exports.minify = minify;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;