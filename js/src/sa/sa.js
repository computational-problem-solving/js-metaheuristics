
/**
 * Simulated Annealing
 */

var __sa__ = function (end, pivoting, delta, accept, improvement, restart, temperature, alpha, cooldown) {

	var sa = function (solution) {
		var tmp, candidate, d, t;

		t = temperature;
		candidate = solution;

		while (!end()) {

			tmp = pivoting(candidate);

			d = delta(tmp, candidate);

			if (d <= 0 || (t > 0 && accept(d))) {
				candidate = tmp;
			}

			d = delta(candidate, solution);

			if(d < 0){
				solution = candidate;
				improvement(solution);
			}
			else if (restart()) {
				t = temperature;
				candidate = solution;
				continue;
			}

			if (cooldown()) {
				t *= alpha;
			}
		}
	};

	return sa;

};

exports.__sa__ = __sa__;