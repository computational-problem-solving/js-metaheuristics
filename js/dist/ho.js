(function(exports, undefined){

	'use strict';


/* js/src/ii */
/* js/src/ii/ii.js */

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
/* js/src/pii */
/* js/src/pii/pii.js */
	
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
/* js/src/rii */
/* js/src/rii/rii.js */

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
/* js/src/sa */
/* js/src/sa/sa.js */

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
})(typeof exports === 'undefined' ? this['ho'] = {} : exports);
