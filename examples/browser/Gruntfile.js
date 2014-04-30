var path = require('path');
module.exports = function(grunt) {
  grunt.initConfig({
    traceur: {
      options: {
        blockBinding: true,
        includeRuntime: true,
        modules: 'inline'
      },
      default: {
        files: {
          'dist/all.js': ['lib/*.js']
        }
      }
    },
    watch: {
      traceur: {
        files: 'lib/*.js',
        tasks: ['traceur']
      }
    }
  });

  grunt.loadTasks(path.join(__dirname, '../../tasks'));
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['traceur', 'watch:traceur']);
};