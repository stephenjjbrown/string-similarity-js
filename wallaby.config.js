/* globals module */
module.exports = function () {
	return {
		files: [
			'dist/**/*.js'
		],
	
		tests: [
			'spec/**/*spec.js'
		],

		env: {type: 'node'}
	};
};