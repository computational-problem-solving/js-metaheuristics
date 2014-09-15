
/**
 * Iterative Improvement
 */

var __ii__ = function (pivoting, delta, mutate) {

	var ii = function (solution) {
		var tmp, d;

		for (;;) {
			tmp = pivoting(solution);
			d = delta(tmp, solution);
			if (d >= 0) {
				break;
			}
			solution = tmp;
		}

		return solution;
	};

	return ii;

};

exports.__ii__ = __ii__;