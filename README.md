# Ionic Base [![Build Status](https://travis-ci.org/meltuhamy/ionic-base.svg?branch=master)](https://travis-ci.org/meltuhamy/ionic-base)

## Installation
```
npm install
bower install
```


## Unit test support
* Add karma to enable unit testing the angular app
* Run unit tests using ```npm test```.
* Easy CI with travis. Simply add .travis.yml

## gulp tasks and watchers
* ```gulp build```: Concatenate and uglify app into one JS file. A sourcemap is included to enable easy debugging.
* ```gulp templates```: Concatenate templates into a single file that's included in the app (no requests during runtime).
* ```gulp bump```: Better app version changing using [gulp-bump](https://github.com/stevelacy/gulp-bump)
