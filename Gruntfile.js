/**
 * @author Reza Babakhani
 */

var sources = [
    '.tmp/persian-date.js'
];

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> */ ( function () {\n',
                footer: '}());'
            },
            dist: {
                src: sources,
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },
        jsdoc: {
            dist: {
                src: sources,
                options: {
                    destination: 'doc/<%= pkg.version %>'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jsdoc');


    if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['concat', 'uglify', 'jsdoc']);
    } else {
        grunt.registerTask('default', ['concat', 'uglify']);
    }

};
