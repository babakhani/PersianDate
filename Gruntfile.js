var sources = [
        '.tmp/temp-version.js'
    ],
    banner =
        '/*\n' +
        '** <%= pkg.name %> - v<%= pkg.version %>\n' +
        '** <%= pkg.author %>\n' +
        '** <%= pkg.homepage %>\n' +
        '** Under <%= pkg.license %> license \n' +
        '*/ \n';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

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
        jsdoc2md: {
            config: {
                options: {
                    'no-gfm': true,
                    'heading-depth': 2,
                    'example-lang': 'js'
                },
                src: 'es6/*.js',
                dest: 'doc/document.md'
            }
        },
        'string-replace': {
            inline: {
                files: {
                    '.tmp/temp-version.js': '.tmp/temp.js',
                },
                options: {
                    replacements: [
                        {
                            pattern: '<!! version >',
                            replacement: '<%= pkg.version %>'
                        }
                    ]
                }
            }
        }
    });

    if (grunt.option("doc") === true) {
        grunt.registerTask('default', ['jsdoc2md']);
    } else {
        grunt.registerTask('default', ['string-replace', 'concat', 'uglify', 'jsdoc2md']);
    }
};
