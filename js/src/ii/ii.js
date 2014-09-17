
/**
 * Iterative Improvement
 */

var __ii__ = function (pivoting, delta) {

	var ii = function (solution) {
		var candidate, d;

		for (;;) {
			candidate = pivoting(solution);
			d = delta(candidate, solution);
			if (d >= 0) {
				break;
			}
			solution = candidate;
		}

		return solution;
	};

	return ii;

};

exports.__ii__ = __ii__;