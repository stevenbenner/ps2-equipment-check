module.exports = function(grunt) {
	'use strict';

	// configure grunt
	grunt.initConfig({
		buildpath: 'build',
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
		},
		clean: {
			build: [ '<%= buildpath %>' ]
		},
		uglify: {
			build: {
				src: [
					'js/qualifications.js',
					'js/service.js',
					'js/character.js',
					'js/itemloader.js',
					'js/outfitloader.js',
					'js/memberloader.js',
					'js/memberreportbuilder.js',
					'js/main.js'
				],
				dest: '<%= buildpath %>/js/app.js',
				options: {
					report: 'gzip'
				}
			}
		},
		cssmin: {
			build: {
				files: {
					'<%= buildpath %>/css/app.css': [
						'css/main.css',
						'css/searchform.css',
						'css/memberreport.css',
						'css/membertree.css'
					]
				},
				options: {
					report: 'gzip'
				}
			}
		},
		jsonmin: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'js/definitions/',
						src: [ '*.json' ],
						dest: '<%= buildpath %>/js/definitions/'
					}
				]
			}
		},
		htmlmin: {
			build: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					keepClosingSlash: true
				},
				files: {
					'<%= buildpath %>/index.html': '<%= buildpath %>/index.html'
				}
			}
		},
		smushit: {
			build: {
				src: [ 'img/*.{png,jpg,gif}' ],
				dest: '<%= buildpath %>/img/'
			}
		},
		copy: {
			index: {
				src: [ 'index.html' ],
				dest: '<%= buildpath %>/index.html',
				options: {
					processContent: function(content) {
						// replace dev js/css references
						var scriptsRegex = /<!-- begin-scripts -->(?:.*\r?\n\s)*<!-- end-scripts -->/,
							stylesRegex = /<!-- begin-stylesheets -->(?:.*\r?\n\s)*<!-- end-stylesheets -->/,
							builtScriptTag = '<script type="text/javascript" src="js/app.js"></script>',
							builtStyleTag = '<link rel="stylesheet" type="text/css" href="css/app.css" />';
						return content.replace(scriptsRegex, builtScriptTag).replace(stylesRegex, builtStyleTag);
					}
				}
			},
			favicon: {
				src: [ 'favicon.ico' ],
				dest: '<%= buildpath %>/favicon.ico'
			}
		}
	});

	// force unix style line endings
	grunt.util.linefeed = '\n';

	// load grunt plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-jsonmin');
	grunt.loadNpmTasks('grunt-smushit');

	// register grunt tasks
	grunt.registerTask('default', [ 'test' ]);
	grunt.registerTask('test', [ 'jsonlint', 'jshint', 'jscs', 'csslint' ]);
	grunt.registerTask('build', [ 'test', 'clean', 'uglify', 'cssmin', 'jsonmin', 'smushit', 'copy', 'htmlmin' ]);
};
