"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.II = II;

var _marked = [II].map(regeneratorRuntime.mark);

/**
 * Iterative Improvement
 *
 * @param first
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbHNlYXJjaC9JSS5qcyJdLCJuYW1lcyI6WyJJSSIsInBpdm90aW5nIiwid2FsayIsImV2YWx1YXRlIiwiYXBwbHkiLCJzb2x1dGlvbiIsImN1cnJlbnQiLCJtdXRhdGlvbiIsImZpdG5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBT2lCQSxFLEdBQUFBLEU7O2VBQUFBLEU7O0FBTmpCOzs7Ozs7QUFNTyxTQUFVQSxFQUFWLE9BQXdDQyxRQUF4QyxFQUFtREMsSUFBbkQsRUFBMERDLFFBQTFELEVBQXFFQyxLQUFyRTtBQUFBO0FBQUEsS0FBaUJDLFFBQWpCO0FBQUEsS0FBNEJDLE9BQTVCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRSxJQUZGO0FBQUE7QUFBQTtBQUFBOztBQUFBLGlCQUkwQkwsU0FBVSxDQUFFSSxRQUFGLEVBQWFDLE9BQWIsQ0FBVixFQUFtQ0osSUFBbkMsRUFBMENDLFFBQTFDLENBSjFCLDZDQUlHSSxRQUpILGtCQUljQyxPQUpkOztBQUFBLFdBTUFELGFBQWEsSUFOYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFRTEgsV0FBT0MsUUFBUCxFQUFrQkUsUUFBbEI7O0FBUks7QUFBQSxZQVVDLENBQUVGLFFBQUYsRUFBYUcsT0FBYixDQVZEOztBQUFBOztBQVlMRixlQUFVRSxPQUFWOztBQVpLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiSUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogSXRlcmF0aXZlIEltcHJvdmVtZW50XG4gKlxuICogQHBhcmFtIGZpcnN0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBJSSAoIFsgc29sdXRpb24gLCBjdXJyZW50IF0gLCBwaXZvdGluZyAsIHdhbGsgLCBldmFsdWF0ZSAsIGFwcGx5ICkge1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IFsgbXV0YXRpb24gLCBmaXRuZXNzIF0gPSBwaXZvdGluZyggWyBzb2x1dGlvbiAsIGN1cnJlbnQgXSAsIHdhbGsgLCBldmFsdWF0ZSApIDtcblxuXHRcdGlmICggbXV0YXRpb24gPT09IG51bGwgKSBicmVhayA7XG5cblx0XHRhcHBseSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdHlpZWxkIFsgc29sdXRpb24gLCBmaXRuZXNzIF0gO1xuXG5cdFx0Y3VycmVudCA9IGZpdG5lc3MgO1xuXG5cdH1cblxufVxuIl19