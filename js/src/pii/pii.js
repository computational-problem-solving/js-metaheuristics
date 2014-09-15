	
/**
 * Probabilistic iterative Improvement
 */

var __pii__ = function (end, random, delta, accept) {

	var pii = function (solution) {
		var candidate, tmp, d;

		tmp = solution;

		while (!end()) {

			candidate = random(tmp);

			d = delta(candidate, tmp);

			if (d <= 0 || accept(d)) {
				tmp = candidate;
			}

			d = delta(candidate, solution);

			if (d < 0) {
				solution = candidate;
			}
		}

		return solution;


	};

	return pii;

};

exports.__pii__ = __pii__;