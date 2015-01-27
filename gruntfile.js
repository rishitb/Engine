// JavaScript Document
module.exports = function(grunt) {
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['browserify', 'concat']);
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      vendor: {
       		src: ['C:/Users/rishitb/Desktop/Engine/identifier.js'],
			dest: 'C:/main.js'
      },
    },
	  concat: {
     dist:
	 	{
			src: ['C:/Users/rishitb/Desktop/Engine/identifier.js'],
			dest: 'C:/main.js'
		}
    }
  });
}