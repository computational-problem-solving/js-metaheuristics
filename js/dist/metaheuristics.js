"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/globalsearch */
		/* js/src/globalsearch/IG.js */

		/**
   * Iterated Greedy
   */

		var IG = regeneratorRuntime.mark(function IG(_ref, localsearch, alter, pivoting, walk, evaluate) {
			var _ref2 = _slicedToArray(_ref, 2);

			var solution = _ref2[0];
			var best = _ref2[1];

			var _localsearch, _localsearch2, _localsearch3, _localsearch32, _candidate, fitness;

			return regeneratorRuntime.wrap(function IG$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_localsearch = localsearch([solution, best]);
						_localsearch2 = _slicedToArray(_localsearch, 2);
						solution = _localsearch2[0];
						best = _localsearch2[1];

						candidate = solution;

					case 5:
						if (!true) {
							context$3$0.next = 15;
							break;
						}

						_localsearch3 = localsearch(alter([solution, best]));
						_localsearch32 = _slicedToArray(_localsearch3, 2);
						_candidate = _localsearch32[0];
						fitness = _localsearch32[1];

						if (fitness >= best || accept(fitness, best)) {

							solution = _candidate;
							best = fitness;
						}

						context$3$0.next = 13;
						return [solution, best];

					case 13:
						context$3$0.next = 5;
						break;

					case 15:
					case "end":
						return context$3$0.stop();
				}
			}, IG, this);
		});

		exports.IG = IG;

		/* js/src/globalsearch/PII.js */

		/**
   * Probabilistic Iterative Improvement
   */

		var PII = regeneratorRuntime.mark(function PII(_ref3, random, accept, evaluate, apply) {
			var _ref32 = _slicedToArray(_ref3, 2);

			var solution = _ref32[0];
			var best = _ref32[1];
			var mutation, fitness;
			return regeneratorRuntime.wrap(function PII$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!true) {
							context$3$0.next = 8;
							break;
						}

						mutation = random(solution);
						fitness = evaluate(solution, mutation);

						if (fitness >= best || accept(fitness, best)) {

							apply(solution, mutation);
							best = fitness;
						}

						context$3$0.next = 6;
						return [solution, best];

					case 6:
						context$3$0.next = 0;
						break;

					case 8:
					case "end":
						return context$3$0.stop();
				}
			}, PII, this);
		});

		exports.PII = PII;

		/* js/src/globalsearch/RII.js */

		/**
   * Randomized Iterative Improvement
   */

		var RII = regeneratorRuntime.mark(function RII(_ref4, pivote, pivoting, random, walk, apply, evaluate) {
			var _ref42 = _slicedToArray(_ref4, 2);

			var solution = _ref42[0];
			var best = _ref42[1];

			var _pivoting, _pivoting2, mutation, fitness;

			return regeneratorRuntime.wrap(function RII$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!true) {
							context$3$0.next = 6;
							break;
						}

						if (pivote()) {
							_pivoting = pivoting([solution, best], walk, evaluate);
							_pivoting2 = _slicedToArray(_pivoting, 2);
							mutation = _pivoting2[0];
							fitness = _pivoting2[1];

							if (mutation !== null) {
								apply(solution, mutation);
								best = fitness;
							}
						} else {
							mutation = random(candidate);

							best = evaluate(solution, mutation);

							apply(solution, mutation);
						}

						context$3$0.next = 4;
						return [solution, best];

					case 4:
						context$3$0.next = 0;
						break;

					case 6:
					case "end":
						return context$3$0.stop();
				}
			}, RII, this);
		});

		exports.RII = RII;

		/* js/src/globalsearch/SA.js */

		/**
   * Simulated Annealing
   */

		var SA = regeneratorRuntime.mark(function SA(_ref5, pivoting, walk, evaluate, accept, apply, improvement, temperature, cooldown) {
			var _ref52 = _slicedToArray(_ref5, 2);

			var solution = _ref52[0];
			var best = _ref52[1];

			var t, candidate, current, _pivoting3, _pivoting32, mutation, fitness;

			return regeneratorRuntime.wrap(function SA$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						t = temperature;
						candidate = solution;
						current = best;

					case 3:
						if (!true) {
							context$3$0.next = 14;
							break;
						}

						_pivoting3 = pivoting([candidate, current], walk, evaluate);
						_pivoting32 = _slicedToArray(_pivoting3, 2);
						mutation = _pivoting32[0];
						fitness = _pivoting32[1];

						if (fitness >= current || accept(fitness, current, t)) {

							current = fitness;
							apply(candidate, mutation);

							if (fitness > best) {

								best = fitness;
								improvement(candidate);
							}
						}

						context$3$0.next = 11;
						return [candidate, current];

					case 11:

						t = cooldown(t);

						context$3$0.next = 3;
						break;

					case 14:
					case "end":
						return context$3$0.stop();
				}
			}, SA, this);
		});

		exports.SA = SA;

		/* js/src/globalsearch/TS.js */

		/**
   * Tabu Search
   */

		var TS = regeneratorRuntime.mark(function TS(_ref6, tabu_is, tabu_set, walk, evaluate, apply) {
			var _ref62 = _slicedToArray(_ref6, 2);

			var solution = _ref62[0];
			var best = _ref62[1];

			var _candidate2, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, mutation, fitness;

			return regeneratorRuntime.wrap(function TS$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!true) {
							context$3$0.next = 38;
							break;
						}

						_candidate2 = null;
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						context$3$0.prev = 5;
						_iterator = walk(solution)[Symbol.iterator]();

					case 7:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							context$3$0.next = 16;
							break;
						}

						mutation = _step.value;

						if (!tabu_is(solution, mutation)) {
							context$3$0.next = 11;
							break;
						}

						return context$3$0.abrupt("continue", 13);

					case 11:
						fitness = evaluate(solution, mutation);

						if (fitness > best) {

							best = fitness;
							_candidate2 = mutation;
						}

					case 13:
						_iteratorNormalCompletion = true;
						context$3$0.next = 7;
						break;

					case 16:
						context$3$0.next = 22;
						break;

					case 18:
						context$3$0.prev = 18;
						context$3$0.t0 = context$3$0["catch"](5);
						_didIteratorError = true;
						_iteratorError = context$3$0.t0;

					case 22:
						context$3$0.prev = 22;
						context$3$0.prev = 23;

						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}

					case 25:
						context$3$0.prev = 25;

						if (!_didIteratorError) {
							context$3$0.next = 28;
							break;
						}

						throw _iteratorError;

					case 28:
						return context$3$0.finish(25);

					case 29:
						return context$3$0.finish(22);

					case 30:
						if (!(_candidate2 === null)) {
							context$3$0.next = 32;
							break;
						}

						return context$3$0.abrupt("break", 38);

					case 32:

						tabu_set(solution, _candidate2);

						apply(solution, _candidate2);

						context$3$0.next = 36;
						return [solution, best];

					case 36:
						context$3$0.next = 0;
						break;

					case 38:
					case "end":
						return context$3$0.stop();
				}
			}, TS, this, [[5, 18, 22, 30], [23,, 25, 29]]);
		});

		exports.TS = TS;

		/* js/src/localsearch */
		/* js/src/localsearch/II.js */

		/**
   * Iterative Improvement
   */

		var II = regeneratorRuntime.mark(function II(_ref7, pivoting, walk, evaluate, apply) {
			var _ref72 = _slicedToArray(_ref7, 2);

			var solution = _ref72[0];
			var current = _ref72[1];

			var _pivoting4, _pivoting42, mutation, fitness;

			return regeneratorRuntime.wrap(function II$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!true) {
							context$3$0.next = 13;
							break;
						}

						_pivoting4 = pivoting([solution, current], walk, evaluate);
						_pivoting42 = _slicedToArray(_pivoting4, 2);
						mutation = _pivoting42[0];
						fitness = _pivoting42[1];

						if (!(mutation === null)) {
							context$3$0.next = 7;
							break;
						}

						return context$3$0.abrupt("break", 13);

					case 7:

						apply(solution, mutation);

						context$3$0.next = 10;
						return [solution, fitness];

					case 10:

						current = fitness;

						context$3$0.next = 0;
						break;

					case 13:
					case "end":
						return context$3$0.stop();
				}
			}, II, this);
		});

		exports.II = II;

		/* js/src/localsearch/VND.js */

		/**
   * Variable Neighborhood Descent
   */

		var VND = regeneratorRuntime.mark(function VND(_ref8, N, neighborhoods) {
			var _ref82 = _slicedToArray(_ref8, 2);

			var solution = _ref82[0];
			var best = _ref82[1];

			var k, n, _n$pivoting, _n$pivoting2, mutation, fitness, _n$pivoting3, _n$pivoting32;

			return regeneratorRuntime.wrap(function VND$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						k = 0;

					case 1:
						if (!(k < N)) {
							context$3$0.next = 23;
							break;
						}

						n = neighborhoods[k];
						_n$pivoting = n.pivoting([solution, best], n.walk, n.evaluate);
						_n$pivoting2 = _slicedToArray(_n$pivoting, 2);
						mutation = _n$pivoting2[0];
						fitness = _n$pivoting2[1];

					case 7:
						if (!(fitness > best)) {
							context$3$0.next = 20;
							break;
						}

						best = fitness;
						n.apply(solution, mutation);

						context$3$0.next = 12;
						return [solution, fitness];

					case 12:

						k = 0;
						n = neighborhoods[k];
						_n$pivoting3 = n.pivoting([solution, best], n.walk, n.evaluate);
						_n$pivoting32 = _slicedToArray(_n$pivoting3, 2);
						mutation = _n$pivoting32[0];
						fitness = _n$pivoting32[1];
						context$3$0.next = 7;
						break;

					case 20:

						k += 1;

						context$3$0.next = 1;
						break;

					case 23:
					case "end":
						return context$3$0.stop();
				}
			}, VND, this);
		});

		exports.VND = VND;

		/* js/src/pivoting */
		/* js/src/pivoting/best.js */
		/**
   * Returns the mutation that improves fitness the most.
   * If this mutation does not exist, returns null.
   */

		var best = function best(_ref9, walk, evaluate) {
			var _ref92 = _slicedToArray(_ref9, 2);

			var solution = _ref92[0];
			var _best = _ref92[1];

			var candidate = null;

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = walk(solution)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var mutation = _step2.value;

					var fitness = evaluate(solution, mutation);

					if (fitness > _best) {

						candidate = mutation;
						_best = fitness;
					}
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

			return [candidate, _best];
		};

		exports.best = best;

		/* js/src/pivoting/first.js */
		/**
   * Returns the first mutation that improves fitness.
   * If this mutation does not exist, returns null.
   */

		var first = function first(_ref10, walk, evaluate) {
			var _ref102 = _slicedToArray(_ref10, 2);

			var solution = _ref102[0];
			var current = _ref102[1];
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {

				for (var _iterator3 = walk(solution)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var mutation = _step3.value;

					var fitness = evaluate(solution, mutation);

					if (fitness > current) return [mutation, fitness];
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

		exports.first = first;

		/* js/src/pivoting/first_and_equal.js */
		/**
   * Returns the first mutation that improves fitness or keeps the same fitness
   * value. If this mutation does not exist, returns null.
   */

		var first_and_equal = function first_and_equal(_ref11, walk, evaluate) {
			var _ref112 = _slicedToArray(_ref11, 2);

			var solution = _ref112[0];
			var current = _ref112[1];
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {

				for (var _iterator4 = walk(solution)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var mutation = _step4.value;

					var fitness = evaluate(solution, mutation);

					if (fitness >= current) return [mutation, fitness];
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

			return [null, current];
		};

		exports.first_and_equal = first_and_equal;

		/* js/src/pivoting/first_or_equal.js */
		/**
   * Returns the first mutation that improves the fitness value. If such a
   * mutation does not exist, returns the last mutation that keeps fitness the
   * same, or null.
   */

		var first_or_equal = function first_or_equal(_ref12, walk, evaluate) {
			var _ref122 = _slicedToArray(_ref12, 2);

			var solution = _ref122[0];
			var best = _ref122[1];

			var candidate = null;

			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = walk(solution)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var mutation = _step5.value;

					var fitness = evaluate(solution, mutation);

					if (fitness > best) return [mutation, fitness];

					if (fitness === best) {

						candidate = mutation;
						best = fitness;
					}
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
						_iterator5["return"]();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			return [candidate, best];
		};

		exports.first_or_equal = first_or_equal;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-metaheuristics", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["metaheuristics"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-metaheuristics");
})();