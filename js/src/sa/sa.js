
/**
 * Simulated Annealing
 */

var __sa__ = function (end, pivoting, delta, accept, improvement, temperature, alpha, cooldown) {

	var sa = function (solution) {
		var tmp, candidate, d, t;

		t = temperature;
		candidate = solution;

		while (!end()) {

			tmp = pivoting(candidate);

			d = delta(tmp, candidate);

			if (d <= 0 || (t > 0 && accept(d, t))) {
				candidate = tmp;

				d = delta(candidate, solution);

				if(d < 0){
					solution = candidate;
					improvement(solution);
				}
			}

			if (cooldown()) {
				t *= alpha;
			}
		}
	};

	return sa;

};

exports.__sa__ = __sa__;