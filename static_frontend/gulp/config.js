var build = './dest';
var dest = build;
var src = './src';
var fs = require('fs');
var bstyles = require('bstyles');

module.exports = {
  build: build,
  dest: dest,
  src: src,
  browserSync: {
    host: 'localhost',
    proxy: 'http://localhost',
    open: 'external',
    startPath: '/',
    notify: true,
    notify: {
      styles: bstyles.BottomLeft
    }
  },
  sass: {
    src: src + '/sass/*.{sass,scss}',
    dest: dest,
    settings: {
      indentedSyntax: false,
      imagePath: 'images'
    }
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  scripts: {
    src: src + '/scripts',
    dest: dest + '/js'
  },
  fonts: {
    src: src + '/fonts/**',
    dest: dest + '/fonts'
  },
  php: {
    src: dest + '/**/*.php',
    dest: dest
  },
  browserify: {
    bundleConfigs: [
      {
        entries: src + '/scripts/scripts.js',
        dest: dest + '/js',
        outputName: 'scripts.js'
      }
    ]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/js/',
    cssDest: dest,
    jsDest: dest + '/js',
  }
};
