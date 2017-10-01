const webpackConfig = require('./webpack.config');
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc2md: {
            config: {
                options: {
                    'no-gfm': true,
                    'heading-depth': 1,
                    'example-lang': 'js',
                },
                src: 'src/pDate.js',
                dest: 'doc/document.md'
            }
        },
        webpack: {
            prod: webpackConfig
        }
    });
    if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc2md']);
    } else {
        grunt.registerTask('default', ['webpack', 'watch']);
    }
};
