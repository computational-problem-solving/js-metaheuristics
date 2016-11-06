"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.TS = TS;

var _marked = [TS].map(regeneratorRuntime.mark);

/**
 * Tabu Search
 *
 * @param first
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvVFMuanMiXSwibmFtZXMiOlsiVFMiLCJ0YWJ1X2lzIiwidGFidV9zZXQiLCJ3YWxrIiwiZXZhbHVhdGUiLCJhcHBseSIsInNvbHV0aW9uIiwiYmVzdCIsImNhbmRpZGF0ZSIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFPaUJBLEUsR0FBQUEsRTs7ZUFBQUEsRTs7QUFOakI7Ozs7OztBQU1PLFNBQVVBLEVBQVYsT0FBcUNDLE9BQXJDLEVBQStDQyxRQUEvQyxFQUEwREMsSUFBMUQsRUFBaUVDLFFBQWpFLEVBQTRFQyxLQUE1RTtBQUFBO0FBQUEsS0FBaUJDLFFBQWpCO0FBQUEsS0FBNEJDLElBQTVCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRSxJQUZGO0FBQUE7QUFBQTtBQUFBOztBQUlEQyxjQUpDLEdBSVcsSUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTW1CTCxLQUFNRyxRQUFOLENBTm5COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTU9HLGFBTlA7O0FBQUEsVUFRQ1IsUUFBU0ssUUFBVCxFQUFvQkcsUUFBcEIsQ0FSRDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVVFQyxZQVZGLEdBVVlOLFNBQVVFLFFBQVYsRUFBcUJHLFFBQXJCLENBVlo7OztBQVlKLFNBQUtDLFVBQVVILElBQWYsRUFBc0I7O0FBRXJCQSxhQUFPRyxPQUFQO0FBQ0FGLGtCQUFZQyxRQUFaO0FBRUE7O0FBakJHO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQXFCQUQsY0FBYyxJQXJCZDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUF1QkxOLGNBQVVJLFFBQVYsRUFBcUJFLFNBQXJCOztBQUVBSCxXQUFPQyxRQUFQLEVBQWtCRSxTQUFsQjs7QUF6Qks7QUFBQSxZQTJCQyxDQUFFRixRQUFGLEVBQWFDLElBQWIsQ0EzQkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IlRTLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFRhYnUgU2VhcmNoXG4gKlxuICogQHBhcmFtIGZpcnN0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBUUyAoIFsgc29sdXRpb24gLCBiZXN0IF0gLCB0YWJ1X2lzICwgdGFidV9zZXQgLCB3YWxrICwgZXZhbHVhdGUgLCBhcHBseSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgY2FuZGlkYXRlID0gbnVsbCA7XG5cblx0XHRmb3IgKCBjb25zdCBtdXRhdGlvbiBvZiB3YWxrKCBzb2x1dGlvbiApICkge1xuXG5cdFx0XHRpZiAoIHRhYnVfaXMoIHNvbHV0aW9uICwgbXV0YXRpb24gKSApIGNvbnRpbnVlIDtcblxuXHRcdFx0Y29uc3QgZml0bmVzcyA9IGV2YWx1YXRlKCBzb2x1dGlvbiAsIG11dGF0aW9uICkgO1xuXG5cdFx0XHRpZiAoIGZpdG5lc3MgPiBiZXN0ICkge1xuXG5cdFx0XHRcdGJlc3QgPSBmaXRuZXNzIDtcblx0XHRcdFx0Y2FuZGlkYXRlID0gbXV0YXRpb24gO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIGNhbmRpZGF0ZSA9PT0gbnVsbCApIGJyZWFrIDtcblxuXHRcdHRhYnVfc2V0KCBzb2x1dGlvbiAsIGNhbmRpZGF0ZSApIDtcblxuXHRcdGFwcGx5KCBzb2x1dGlvbiAsIGNhbmRpZGF0ZSApIDtcblxuXHRcdHlpZWxkIFsgc29sdXRpb24gLCBiZXN0IF0gO1xuXG5cdH1cblxufVxuIl19