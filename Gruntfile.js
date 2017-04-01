var sources = [
        '.tmp/persian-date.js'
    ],
    banner =
        '/*\n' +
        '** <%= pkg.name %> - v<%= pkg.version %>\n' +
        '** <%= pkg.author %>\n' +
        '** <%= pkg.homepage %>\n' +
        '** Under <%= pkg.license %> license \n' +
        '*/ \n';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: banner + '( function () {',
                footer: '}());'
            },
            dist: {
                src: sources,
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                stripBanners: true,
                banner: banner
            },
            build: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
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
