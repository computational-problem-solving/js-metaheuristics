"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.II = II;

var _marked = [II].map(regeneratorRuntime.mark);

/**
 * Iterative Improvement
 */

function II(_ref, pivoting, walk, evaluate, apply) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    current = _ref2[1];

	var _pivoting, _pivoting2, mutation, fitness;

	return regeneratorRuntime.wrap(function II$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!true) {
						_context.next = 10;
						break;
					}

					_pivoting = pivoting([solution, current], walk, evaluate), _pivoting2 = _slicedToArray(_pivoting, 2), mutation = _pivoting2[0], fitness = _pivoting2[1];

					if (!(mutation === null)) {
						_context.next = 4;
						break;
					}

					return _context.abrupt("break", 10);

				case 4:

					apply(solution, mutation);

					_context.next = 7;
					return [solution, fitness];

				case 7:

					current = fitness;

					_context.next = 0;
					break;

				case 10:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbHNlYXJjaC9JSS5qcyJdLCJuYW1lcyI6WyJJSSIsInBpdm90aW5nIiwid2FsayIsImV2YWx1YXRlIiwiYXBwbHkiLCJzb2x1dGlvbiIsImN1cnJlbnQiLCJtdXRhdGlvbiIsImZpdG5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBS2lCQSxFLEdBQUFBLEU7O2VBQUFBLEU7O0FBSmpCOzs7O0FBSU8sU0FBVUEsRUFBVixPQUF3Q0MsUUFBeEMsRUFBbURDLElBQW5ELEVBQTBEQyxRQUExRCxFQUFxRUMsS0FBckU7QUFBQTtBQUFBLEtBQWlCQyxRQUFqQjtBQUFBLEtBQTRCQyxPQUE1Qjs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRUUsSUFGRjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQkFJMEJMLFNBQVUsQ0FBRUksUUFBRixFQUFhQyxPQUFiLENBQVYsRUFBbUNKLElBQW5DLEVBQTBDQyxRQUExQyxDQUoxQiw2Q0FJR0ksUUFKSCxrQkFJY0MsT0FKZDs7QUFBQSxXQU1BRCxhQUFhLElBTmI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBUUxILFdBQU9DLFFBQVAsRUFBa0JFLFFBQWxCOztBQVJLO0FBQUEsWUFVQyxDQUFFRixRQUFGLEVBQWFHLE9BQWIsQ0FWRDs7QUFBQTs7QUFZTEYsZUFBVUUsT0FBVjs7QUFaSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IklJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEl0ZXJhdGl2ZSBJbXByb3ZlbWVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogSUkgKCBbIHNvbHV0aW9uICwgY3VycmVudCBdICwgcGl2b3RpbmcgLCB3YWxrICwgZXZhbHVhdGUgLCBhcHBseSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCBbIG11dGF0aW9uICwgZml0bmVzcyBdID0gcGl2b3RpbmcoIFsgc29sdXRpb24gLCBjdXJyZW50IF0gLCB3YWxrICwgZXZhbHVhdGUgKSA7XG5cblx0XHRpZiAoIG11dGF0aW9uID09PSBudWxsICkgYnJlYWsgO1xuXG5cdFx0YXBwbHkoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cblx0XHR5aWVsZCBbIHNvbHV0aW9uICwgZml0bmVzcyBdIDtcblxuXHRcdGN1cnJlbnQgPSBmaXRuZXNzIDtcblxuXHR9XG5cbn1cbiJdfQ==