	
/**
 * Probabilistic iterative Improvement
 */

var __pii__ = function (end, pivoting, delta, accept) {

	var pii = function (solution) {
		var candidate, tmp, d;

		tmp = solution;

		while (!end()) {

			candidate = pivoting(tmp);

			d = delta(candidate, tmp);

			if (d <= 0 || accept(d)) {
				tmp = candidate;
			}

			d = delta(candidate, solution);

			if (d < 0) {
				solution = candidate;
			}
		}


	};

	return pii;

};

exports.__pii__ = __pii__;