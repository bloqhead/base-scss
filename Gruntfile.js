/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({
		scsslint: {
			files: [
				'dist/base.scss',
				'dist/modules/**/*.scss'
			],
			options: {
				compact: true,
				colorizeOutput: true,
				reporterOutput: 'debug/Lint-Report-<%= grunt.template.today("yyyymmddhMMss") %>.xml'
			}
		},
		watch: {
			files: [
				'dist/base.scss',
				'dist/modules/**/*.scss'
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
