
module.exports = function (wallaby) {
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