
/**
 * Randomized iterative Improvement
 */

var __rii__ = function (end, pivote, pivoting, random, delta) {

	var rii = function (solution) {
		var tmp, d;

		tmp = solution;

		while (!end()) {

			if (pivote()) {
				tmp = pivoting(tmp);
			}
			else {
				tmp = random(tmp);
			}

			d = delta(tmp, solution);

			if (d < 0) {
				solution = tmp;
			}
		}

		return solution;


	};

	return rii;

};

exports.__rii__ = __rii__;