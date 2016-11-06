"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.IG = IG;

var _marked = [IG].map(regeneratorRuntime.mark);

/**
 * Iterated Greedy
 *
 * @param first
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvSUcuanMiXSwibmFtZXMiOlsiSUciLCJsb2NhbHNlYXJjaCIsImFsdGVyIiwicGl2b3RpbmciLCJ3YWxrIiwiZXZhbHVhdGUiLCJzb2x1dGlvbiIsImJlc3QiLCJjYW5kaWRhdGUiLCJmaXRuZXNzIiwiYWNjZXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQU9pQkEsRSxHQUFBQSxFOztlQUFBQSxFOztBQU5qQjs7Ozs7O0FBTU8sU0FBVUEsRUFBVixPQUFxQ0MsV0FBckMsRUFBbURDLEtBQW5ELEVBQTJEQyxRQUEzRCxFQUFzRUMsSUFBdEUsRUFBNkVDLFFBQTdFO0FBQUE7QUFBQSxLQUFpQkMsUUFBakI7QUFBQSxLQUE0QkMsSUFBNUI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFZ0JOLFlBQWEsQ0FBRUssUUFBRixFQUFhQyxJQUFiLENBQWIsQ0FGaEI7QUFBQTtBQUVKRCxhQUZJO0FBRU9DLFNBRlA7OztBQUlOQyxpQkFBWUYsUUFBWjs7QUFKTTtBQUFBLFVBTUUsSUFORjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxxQkFRMkJMLFlBQWFDLE1BQU8sQ0FBRUksUUFBRixFQUFhQyxJQUFiLENBQVAsQ0FBYixDQVIzQixvREFRR0MsVUFSSCxxQkFRZUMsT0FSZjs7O0FBVUwsU0FBS0EsV0FBV0YsSUFBWCxJQUFtQkcsT0FBUUQsT0FBUixFQUFrQkYsSUFBbEIsQ0FBeEIsRUFBbUQ7O0FBRWxERCxpQkFBV0UsVUFBWDtBQUNBRCxhQUFPRSxPQUFQO0FBRUE7O0FBZkk7QUFBQSxZQWlCQyxDQUFFSCxRQUFGLEVBQWFDLElBQWIsQ0FqQkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IklHLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEl0ZXJhdGVkIEdyZWVkeVxuICpcbiAqIEBwYXJhbSBmaXJzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogSUcgKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgbG9jYWxzZWFyY2ggLCBhbHRlciAsIHBpdm90aW5nICwgd2FsayAsIGV2YWx1YXRlICkge1xuXG5cdFsgc29sdXRpb24gLCBiZXN0IF0gPSBsb2NhbHNlYXJjaCggWyBzb2x1dGlvbiAsIGJlc3QgXSApIDtcblxuXHRjYW5kaWRhdGUgPSBzb2x1dGlvbjtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCBbIGNhbmRpZGF0ZSAsIGZpdG5lc3MgXSA9IGxvY2Fsc2VhcmNoKCBhbHRlciggWyBzb2x1dGlvbiAsIGJlc3QgXSApICkgO1xuXG5cdFx0aWYgKCBmaXRuZXNzID49IGJlc3QgfHwgYWNjZXB0KCBmaXRuZXNzICwgYmVzdCApICkge1xuXG5cdFx0XHRzb2x1dGlvbiA9IGNhbmRpZGF0ZSA7XG5cdFx0XHRiZXN0ID0gZml0bmVzcyA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBbIHNvbHV0aW9uICwgYmVzdCBdIDtcblxuXHR9XG5cbn1cbiJdfQ==