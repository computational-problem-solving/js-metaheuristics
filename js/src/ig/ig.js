
var __ig__ = function(localsearch, alter, pivoting, delta){

	var ig = function (solution) {

		var candidate, tmp, d;

		solution = localsearch(solution);
		candidate = solution;

		while (!end()) {

			tmp = alter(candidate);
			tmp = localsearch(tmp);

			d = delta(tmp, candidate);
			if (d <= 0 || (t > 0 && accept(d, t))) {
				candidate = tmp;


				d = delta(candidate, solution);
				if (d < 0) {
					solution = candidate;
				}
			}
		}

		return solution;
	};

	return ig;
};

exports.__ig__ = __ig__;