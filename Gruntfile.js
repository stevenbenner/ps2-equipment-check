module.exports = function(grunt) {
	'use strict';

	// configure grunt
	grunt.initConfig({
		jshint: {
			grunt: {
				src: [ 'Gruntfile.js' ],
				options: {
					jshintrc: '.jshintrc'
				}
			},
			js: {
				src: [ 'js/*.js' ],
				options: {
					jshintrc: 'js/.jshintrc'
				}
			}
		},
		csslint: {
			css: {
				src: [ 'css/*.css' ],
				options: {
					'adjoining-classes': false,
					'box-model': false,
					'bulletproof-font-face': false,
					'fallback-colors': false,
					'ids': false,
					'universal-selector': false
				}
			}
		}
	});

	// load grunt plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// register grunt tasks
	grunt.registerTask('default', [ 'jshint', 'csslint' ]);
};
