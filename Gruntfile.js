/**
 * @author Reza Babakhani
 */

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
        src: [
          'src/banner.js',
          'src/constants.js',
          'src/helpers.js',
          'src/algorithms.js',
          'src/duration.js',
          'src/date.js',
          'src/compat.js'
        ],
        dest: 'dist/<%= pkg.version %>/<%= pkg.name %>-<%= pkg.version %>.js'
      }
    },
    uglify: {
      build: {
        src: 'dist/<%= pkg.version %>/<%= pkg.name %>-<%= pkg.version %>.js',
        dest: 'dist/<%= pkg.version %>/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat', 'uglify']);
};
