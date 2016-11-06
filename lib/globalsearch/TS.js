"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.TS = TS;

var _marked = [TS].map(regeneratorRuntime.mark);

/**
 * Tabu Search
 */

function TS(_ref, tabu_is, tabu_set, walk, evaluate, apply) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    best = _ref2[1];

	var candidate, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, mutation, fitness;

	return regeneratorRuntime.wrap(function TS$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!true) {
						_context.next = 38;
						break;
					}

					candidate = null;
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 5;
					_iterator = walk(solution)[Symbol.iterator]();

				case 7:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 16;
						break;
					}

					mutation = _step.value;

					if (!tabu_is(solution, mutation)) {
						_context.next = 11;
						break;
					}

					return _context.abrupt("continue", 13);

				case 11:
					fitness = evaluate(solution, mutation);


					if (fitness > best) {

						best = fitness;
						candidate = mutation;
					}

				case 13:
					_iteratorNormalCompletion = true;
					_context.next = 7;
					break;

				case 16:
					_context.next = 22;
					break;

				case 18:
					_context.prev = 18;
					_context.t0 = _context["catch"](5);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 22:
					_context.prev = 22;
					_context.prev = 23;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 25:
					_context.prev = 25;

					if (!_didIteratorError) {
						_context.next = 28;
						break;
					}

					throw _iteratorError;

				case 28:
					return _context.finish(25);

				case 29:
					return _context.finish(22);

				case 30:
					if (!(candidate === null)) {
						_context.next = 32;
						break;
					}

					return _context.abrupt("break", 38);

				case 32:

					tabu_set(solution, candidate);

					apply(solution, candidate);

					_context.next = 36;
					return [solution, best];

				case 36:
					_context.next = 0;
					break;

				case 38:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this, [[5, 18, 22, 30], [23,, 25, 29]]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvVFMuanMiXSwibmFtZXMiOlsiVFMiLCJ0YWJ1X2lzIiwidGFidV9zZXQiLCJ3YWxrIiwiZXZhbHVhdGUiLCJhcHBseSIsInNvbHV0aW9uIiwiYmVzdCIsImNhbmRpZGF0ZSIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFLaUJBLEUsR0FBQUEsRTs7ZUFBQUEsRTs7QUFKakI7Ozs7QUFJTyxTQUFVQSxFQUFWLE9BQXFDQyxPQUFyQyxFQUErQ0MsUUFBL0MsRUFBMERDLElBQTFELEVBQWlFQyxRQUFqRSxFQUE0RUMsS0FBNUU7QUFBQTtBQUFBLEtBQWlCQyxRQUFqQjtBQUFBLEtBQTRCQyxJQUE1Qjs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRUUsSUFGRjtBQUFBO0FBQUE7QUFBQTs7QUFJREMsY0FKQyxHQUlXLElBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU1tQkwsS0FBTUcsUUFBTixDQU5uQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1PRyxhQU5QOztBQUFBLFVBUUNSLFFBQVNLLFFBQVQsRUFBb0JHLFFBQXBCLENBUkQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFVRUMsWUFWRixHQVVZTixTQUFVRSxRQUFWLEVBQXFCRyxRQUFyQixDQVZaOzs7QUFZSixTQUFLQyxVQUFVSCxJQUFmLEVBQXNCOztBQUVyQkEsYUFBT0csT0FBUDtBQUNBRixrQkFBWUMsUUFBWjtBQUVBOztBQWpCRztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0FxQkFELGNBQWMsSUFyQmQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBdUJMTixjQUFVSSxRQUFWLEVBQXFCRSxTQUFyQjs7QUFFQUgsV0FBT0MsUUFBUCxFQUFrQkUsU0FBbEI7O0FBekJLO0FBQUEsWUEyQkMsQ0FBRUYsUUFBRixFQUFhQyxJQUFiLENBM0JEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJUUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBUYWJ1IFNlYXJjaFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogVFMgKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgdGFidV9pcyAsIHRhYnVfc2V0ICwgd2FsayAsIGV2YWx1YXRlICwgYXBwbHkgKSB7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGNhbmRpZGF0ZSA9IG51bGwgO1xuXG5cdFx0Zm9yICggY29uc3QgbXV0YXRpb24gb2Ygd2Fsayggc29sdXRpb24gKSApIHtcblxuXHRcdFx0aWYgKCB0YWJ1X2lzKCBzb2x1dGlvbiAsIG11dGF0aW9uICkgKSBjb250aW51ZSA7XG5cblx0XHRcdGNvbnN0IGZpdG5lc3MgPSBldmFsdWF0ZSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdFx0aWYgKCBmaXRuZXNzID4gYmVzdCApIHtcblxuXHRcdFx0XHRiZXN0ID0gZml0bmVzcyA7XG5cdFx0XHRcdGNhbmRpZGF0ZSA9IG11dGF0aW9uIDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBjYW5kaWRhdGUgPT09IG51bGwgKSBicmVhayA7XG5cblx0XHR0YWJ1X3NldCggc29sdXRpb24gLCBjYW5kaWRhdGUgKSA7XG5cblx0XHRhcHBseSggc29sdXRpb24gLCBjYW5kaWRhdGUgKSA7XG5cblx0XHR5aWVsZCBbIHNvbHV0aW9uICwgYmVzdCBdIDtcblxuXHR9XG5cbn1cbiJdfQ==