(function(exports, undefined){

	'use strict';


/* js/src/ii */
/* js/src/ii/ii.js */

/**
 * Iterative Improvement
 */

var __ii__ = function (pivoting, improved, mutate) {

	var ii = function (solution) {
		var mutation;

		mutation = pivoting(solution);
		while (improved(mutation)) {
			solution = mutate(mutation, solution);
			mutation = pivoting(solution);
		}

		return solution;
	};

	return ii;

};

exports.__ii__ = __ii__;
})(typeof exports === 'undefined' ? this['ho'] = {} : exports);
