/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({
		// SCSS Lint
		scsslint: {
			files: [
				'base.scss',
				'modules/**/*.scss'
			],
			options: {
				colorizeOutput: true,
				reporterOutput: 'scss-lint-report.xml'
			}
		},
		// Watch
		watch: {
			files: [
				'base.scss',
				'modules/**/*.scss'
			],
			tasks: [
				'scsslint'
			]
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-scss-lint');
	grunt.registerTask('default', ['scsslint']);
};
