"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.IG = IG;

var _marked = [IG].map(regeneratorRuntime.mark);

/**
 * Iterated Greedy
 */

function IG(_ref, localsearch, alter, pivoting, walk, evaluate) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    best = _ref2[1];

	var _localsearch, _localsearch2, _localsearch3, _localsearch4, _candidate, fitness;

	return regeneratorRuntime.wrap(function IG$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_localsearch = localsearch([solution, best]);
					_localsearch2 = _slicedToArray(_localsearch, 2);
					solution = _localsearch2[0];
					best = _localsearch2[1];


					candidate = solution;

				case 5:
					if (!true) {
						_context.next = 12;
						break;
					}

					_localsearch3 = localsearch(alter([solution, best])), _localsearch4 = _slicedToArray(_localsearch3, 2), _candidate = _localsearch4[0], fitness = _localsearch4[1];


					if (fitness >= best || accept(fitness, best)) {

						solution = _candidate;
						best = fitness;
					}

					_context.next = 10;
					return [solution, best];

				case 10:
					_context.next = 5;
					break;

				case 12:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvSUcuanMiXSwibmFtZXMiOlsiSUciLCJsb2NhbHNlYXJjaCIsImFsdGVyIiwicGl2b3RpbmciLCJ3YWxrIiwiZXZhbHVhdGUiLCJzb2x1dGlvbiIsImJlc3QiLCJjYW5kaWRhdGUiLCJmaXRuZXNzIiwiYWNjZXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUtpQkEsRSxHQUFBQSxFOztlQUFBQSxFOztBQUpqQjs7OztBQUlPLFNBQVVBLEVBQVYsT0FBcUNDLFdBQXJDLEVBQW1EQyxLQUFuRCxFQUEyREMsUUFBM0QsRUFBc0VDLElBQXRFLEVBQTZFQyxRQUE3RTtBQUFBO0FBQUEsS0FBaUJDLFFBQWpCO0FBQUEsS0FBNEJDLElBQTVCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRWdCTixZQUFhLENBQUVLLFFBQUYsRUFBYUMsSUFBYixDQUFiLENBRmhCO0FBQUE7QUFFSkQsYUFGSTtBQUVPQyxTQUZQOzs7QUFJTkMsaUJBQVlGLFFBQVo7O0FBSk07QUFBQSxVQU1FLElBTkY7QUFBQTtBQUFBO0FBQUE7O0FBQUEscUJBUTJCTCxZQUFhQyxNQUFPLENBQUVJLFFBQUYsRUFBYUMsSUFBYixDQUFQLENBQWIsQ0FSM0Isb0RBUUdDLFVBUkgscUJBUWVDLE9BUmY7OztBQVVMLFNBQUtBLFdBQVdGLElBQVgsSUFBbUJHLE9BQVFELE9BQVIsRUFBa0JGLElBQWxCLENBQXhCLEVBQW1EOztBQUVsREQsaUJBQVdFLFVBQVg7QUFDQUQsYUFBT0UsT0FBUDtBQUVBOztBQWZJO0FBQUEsWUFpQkMsQ0FBRUgsUUFBRixFQUFhQyxJQUFiLENBakJEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJJRy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBJdGVyYXRlZCBHcmVlZHlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIElHICggWyBzb2x1dGlvbiAsIGJlc3QgXSAsIGxvY2Fsc2VhcmNoICwgYWx0ZXIgLCBwaXZvdGluZyAsIHdhbGsgLCBldmFsdWF0ZSApIHtcblxuXHRbIHNvbHV0aW9uICwgYmVzdCBdID0gbG9jYWxzZWFyY2goIFsgc29sdXRpb24gLCBiZXN0IF0gKSA7XG5cblx0Y2FuZGlkYXRlID0gc29sdXRpb247XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgWyBjYW5kaWRhdGUgLCBmaXRuZXNzIF0gPSBsb2NhbHNlYXJjaCggYWx0ZXIoIFsgc29sdXRpb24gLCBiZXN0IF0gKSApIDtcblxuXHRcdGlmICggZml0bmVzcyA+PSBiZXN0IHx8IGFjY2VwdCggZml0bmVzcyAsIGJlc3QgKSApIHtcblxuXHRcdFx0c29sdXRpb24gPSBjYW5kaWRhdGUgO1xuXHRcdFx0YmVzdCA9IGZpdG5lc3MgO1xuXG5cdFx0fVxuXG5cdFx0eWllbGQgWyBzb2x1dGlvbiAsIGJlc3QgXSA7XG5cblx0fVxuXG59XG4iXX0=