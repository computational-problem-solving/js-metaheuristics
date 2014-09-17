
/**
 * Randomized iterative Improvement
 */

var __rii__ = function (end, pivote, pivoting, random, delta) {

	var rii = function (solution) {
		var candidate, d;

		candidate = solution;

		while (!end()) {

			if (pivote()) {
				candidate = pivoting(candidate);
			}
			else {
				candidate = random(candidate);
			}

			d = delta(candidate, solution);

			if (d < 0) {
				solution = candidate;
			}
		}

		return solution;


	};

	return rii;

};

exports.__rii__ = __rii__;