var gulp = require("gulp");

//（使用此方法必须先安装模块，然后引入）
//合并
const concat = require("gulp-concat");
//压缩
const uglify = require("gulp-uglify");
//起名
const rename = require("gulp-rename");
const uglifycss = require("gulp-minify-css")
const sass=require("gulp-sass");
// gulp.task("copy-html", async function(){
// 	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\syj"));
// });

gulp.task("copy-html", async function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\syj"));
});

gulp.task("copy-css", async function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\css"));
});

gulp.task("copy-img", async function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\img"));
});

gulp.task("copy-js", async function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\js"));
});

// gulp.task("copy-php",async function(){
	
// })

// 定义一个任务  task
// 第一个参数：是任务名
// 第二个参数：是任务对应的函数
gulp.task("watchall",async function(){
	//watch()：监听，监视
     gulp.watch("*.html",async function(){
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\syj"));
    })
	
	gulp.watch("css/**/*",async function(){
	    gulp.src("css/**/*")
	    .pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\css"));
	})
	
	gulp.watch("js/**/*",async function(){
	    gulp.src("js/**/*")
	    .pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\js"));
	})
	
	gulp.watch("img/**/*",async function(){
	    gulp.src("img/**/*")
	    .pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\img"));
	})
 })

//合并  concat
// gulp.task("watcha", async function(){
// 	gulp.src(["css/common.css","css/index.css","css/login.css"]) 
// 		.pipe(concat("concats.css"))
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\css"))
// 		.pipe(uglifycss())
// 		.pipe(rename("concats.min.css"))
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\css"))
// })

// //压缩  uglify
// gulp.task("watchl", async function(){
// 	gulp.src("css/concats.css")
// 		.pipe(uglify()) 
// 		.pipe(rename("concats.min.css"))
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\css"))
	
// });
gulp.task("copy-sass", async function(){
	gulp.src("sass/**/*")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\syj\\css"));
});

