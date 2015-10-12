"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/ig */
		/* js/src/ig/ig.js */

		var __ig__ = function __ig__(localsearch, alter, pivoting, delta) {

			var ig = function ig(solution) {

				var candidate, tmp, d;

				solution = localsearch(solution);
				candidate = solution;

				while (!end()) {

					tmp = alter(candidate);
					tmp = localsearch(tmp);

					d = delta(tmp, candidate);
					if (d <= 0 || t > 0 && accept(d, t)) {
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

		var ii = function ii(pivoting, delta, solution) {

			var candidate, d;

			for (;;) {

				candidate = pivoting(solution);

				d = delta(candidate, solution);

				if (d >= 0) {
					break;
				}

				solution = candidate;
			}

			return solution;
		};

		exports.ii = ii;

		/* js/src/pii */
		/* js/src/pii/pii.js */

		/**
   * Probabilistic iterative Improvement
   */

		var __pii__ = function __pii__(end, random, delta, accept) {

			var pii = function pii(solution) {
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
		/* js/src/pivoting */
		/* js/src/pivoting/best.js */
		var best = function best(_ref, walk, evaluate) {
			var _ref2 = _slicedToArray(_ref, 2);

			var solution = _ref2[0];
			var _best = _ref2[1];

			var candidate = null;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = walk(solution)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var mutation = _step.value;

					var fitness = evaluate(solution, mutation);

					if (fitness >= _best) {

						candidate = mutation;
						_best = fitness;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return [candidate, _best];
		};

		exports.best = best;

		/* js/src/pivoting/first.js */
		var first = function first(_ref3, walk, evaluate) {
			var _ref32 = _slicedToArray(_ref3, 2);

			var solution = _ref32[0];
			var current = _ref32[1];
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {

				for (var _iterator2 = walk(solution)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var mutation = _step2.value;

					var fitness = evaluate(solution, mutation);

					if (fitness > current) return [mutation, fitness];
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
						_iterator2["return"]();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return [null, current];
		};

		exports.first = first;

		/* js/src/pivoting/firstandeq.js */
		var firstandeq = function firstandeq(_ref4, walk, evaluate) {
			var _ref42 = _slicedToArray(_ref4, 2);

			var solution = _ref42[0];
			var current = _ref42[1];
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {

				for (var _iterator3 = walk(solution)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var mutation = _step3.value;

					var fitness = evaluate(solution, mutation);

					if (fitness >= current) return [mutation, fitness];
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
						_iterator3["return"]();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return [null, current];
		};

		exports.firstandeq = firstandeq;

		/* js/src/pivoting/firstoreq.js */
		var firstoreq = function firstoreq(_ref5, walk, evaluate) {
			var _ref52 = _slicedToArray(_ref5, 2);

			var solution = _ref52[0];
			var best = _ref52[1];

			var candidate = null;

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = walk(solution)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var mutation = _step4.value;

					var fitness = evaluate(solution, mutation);

					if (fitness > best) return [mutation, fitness];

					if (fitness === best) {

						candidate = mutation;
						best = fitness;
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
						_iterator4["return"]();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			return [candidate, best];
		};

		exports.firstoreq = firstoreq;

		/* js/src/rii */
		/* js/src/rii/rii.js */

		/**
   * Randomized iterative Improvement
   */

		var __rii__ = function __rii__(end, pivote, pivoting, random, delta) {

			var rii = function rii(solution) {
				var candidate, d;

				candidate = solution;

				while (!end()) {

					if (pivote()) {
						candidate = pivoting(candidate);
					} else {
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

		var __sa__ = function __sa__(end, pivoting, delta, accept, improvement, temperature, alpha, cooldown) {

			var sa = function sa(solution) {
				var tmp, candidate, d, t;

				t = temperature;
				candidate = solution;

				while (!end()) {

					tmp = pivoting(candidate);

					d = delta(tmp, candidate);

					if (d <= 0 || t > 0 && accept(d, t)) {
						candidate = tmp;

						d = delta(candidate, solution);

						if (d < 0) {
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

		var __vnd__ = function __vnd__(neighborhoods, n, delta) {

			var vnd = function vnd(solution) {

				var k, pivoting, candidate;

				k = 0;

				while (k < n) {
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
		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-ho", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["ho"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-ho");
})();