	
/**
 * Probabilistic iterative Improvement
 */

var __pii__ = function (end, random, delta, accept) {

	var pii = function (solution) {
		var candidate, tmp, d;

		candidate = solution;

		while (!end()) {

			tmp = random(candidate);

			d = delta(tmp, candidate);

			if (d <= 0 || accept(d)) {
				candidate = tmp;

				d = delta(candidate, solution);

				if (d < 0) {
					solution = candidate;
				}
			}
		}

		return solution;


	};

	return pii;

};

exports.__pii__ = __pii__;