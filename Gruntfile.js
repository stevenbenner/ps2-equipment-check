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
		jscs: {
			grunt: {
				src: [ 'Gruntfile.js' ],
				options: {
					config: '.jscsrc'
				}
			},
			js: {
				src: [ 'js/*.js' ],
				options: {
					config: '.jscsrc'
				}
			}
		},
		jsonlint: {
			definitions: {
				src: [ 'js/definitions/*.json' ]
			},
			project: {
				src: [ '.jscsrc', '.jshintrc', 'package.json' ]
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
	grunt.loadNpmTasks('grunt-jscs-checker');
	grunt.loadNpmTasks('grunt-jsonlint');

	// register grunt tasks
	grunt.registerTask('default', [ 'jsonlint', 'jshint', 'jscs', 'csslint' ]);
};
