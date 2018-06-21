
module.exports = function (wallaby) {
	return {
		files: [
			'dist/**/*.js'
		],
	
		tests: [
			'test/**/*spec.js'
		],

		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},

		env: {type: 'node'}
	};
};