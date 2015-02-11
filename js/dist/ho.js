(function(exports, undefined){

	'use strict';


/* js/src/ig */
/* js/src/ig/ig.js */

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
/* js/src/ii */
/* js/src/ii/ii.js */

/**
 * Iterative Improvement
 */

var ii = function ( pivoting , delta , solution ) {

	var candidate , d ;

	for ( ; ; ) {

		candidate = pivoting( solution ) ;

		d = delta( candidate , solution ) ;

		if ( d >= 0 ) {
			break ;
		}

		solution = candidate ;
	}

	return solution ;

} ;

exports.ii = ii ;

/* js/src/pii */
/* js/src/pii/pii.js */
	
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
/* js/src/rii */
/* js/src/rii/rii.js */

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
/* js/src/sa */
/* js/src/sa/sa.js */

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
/* js/src/vnd */
/* js/src/vnd/vnd.js */

var __vnd__ = function(neighborhoods, n, delta){

	var vnd = function(solution){

		var k, pivoting, candidate;

		k = 0;

		while(k < n){
			for (;;) {
				pivoting = neighborhoods[k];
				candidate = pivoting(solution);
				d = delta(candidate, solution);
				if (d >= 0) {
					break;
				}
				k = 0;
				solution = candidate;
			}
			++k;
		}

	};

	return vnd;

};

exports.__vnd__ = __vnd__;
})(typeof exports === 'undefined' ? this['ho'] = {} : exports);
