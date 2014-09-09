
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