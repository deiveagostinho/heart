css:
	stylus < assets/css.styl > public/css.css

react:
	browserify < assets/main.js > public/main.js

bundle:
	css react