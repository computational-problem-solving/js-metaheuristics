"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.RII = RII;

var _marked = [RII].map(regeneratorRuntime.mark);

/**
 * Randomized Iterative Improvement
 *
 * @param first
 */

function RII(_ref, pivote, pivoting, random, walk, apply, evaluate) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    best = _ref2[1];

	var _pivoting, _pivoting2, mutation, fitness, _mutation;

	return regeneratorRuntime.wrap(function RII$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!true) {
						_context.next = 6;
						break;
					}

					if (pivote()) {
						_pivoting = pivoting([solution, best], walk, evaluate), _pivoting2 = _slicedToArray(_pivoting, 2), mutation = _pivoting2[0], fitness = _pivoting2[1];


						if (mutation !== null) {
							apply(solution, mutation);
							best = fitness;
						}
					} else {
						_mutation = random(candidate);


						best = evaluate(solution, _mutation);

						apply(solution, _mutation);
					}

					_context.next = 4;
					return [solution, best];

				case 4:
					_context.next = 0;
					break;

				case 6:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvUklJLmpzIl0sIm5hbWVzIjpbIlJJSSIsInBpdm90ZSIsInBpdm90aW5nIiwicmFuZG9tIiwid2FsayIsImFwcGx5IiwiZXZhbHVhdGUiLCJzb2x1dGlvbiIsImJlc3QiLCJtdXRhdGlvbiIsImZpdG5lc3MiLCJjYW5kaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBT2lCQSxHLEdBQUFBLEc7O2VBQUFBLEc7O0FBTmpCOzs7Ozs7QUFNTyxTQUFVQSxHQUFWLE9BQXNDQyxNQUF0QyxFQUErQ0MsUUFBL0MsRUFBMERDLE1BQTFELEVBQW1FQyxJQUFuRSxFQUEwRUMsS0FBMUUsRUFBa0ZDLFFBQWxGO0FBQUE7QUFBQSxLQUFrQkMsUUFBbEI7QUFBQSxLQUE2QkMsSUFBN0I7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVFLElBRkY7QUFBQTtBQUFBO0FBQUE7O0FBSUwsU0FBS1AsUUFBTCxFQUFpQjtBQUFBLGtCQUVlQyxTQUFVLENBQUVLLFFBQUYsRUFBYUMsSUFBYixDQUFWLEVBQWdDSixJQUFoQyxFQUF1Q0UsUUFBdkMsQ0FGZiw2Q0FFUkcsUUFGUSxrQkFFR0MsT0FGSDs7O0FBSWhCLFVBQUtELGFBQWEsSUFBbEIsRUFBeUI7QUFDeEJKLGFBQU9FLFFBQVAsRUFBa0JFLFFBQWxCO0FBQ0FELGNBQU9FLE9BQVA7QUFDQTtBQUVELE1BVEQsTUFXSztBQUVFRCxlQUZGLEdBRWFOLE9BQVFRLFNBQVIsQ0FGYjs7O0FBSUpILGFBQU9GLFNBQVVDLFFBQVYsRUFBcUJFLFNBQXJCLENBQVA7O0FBRUFKLFlBQU9FLFFBQVAsRUFBa0JFLFNBQWxCO0FBRUE7O0FBdkJJO0FBQUEsWUF5QkMsQ0FBRUYsUUFBRixFQUFhQyxJQUFiLENBekJEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJSSUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmFuZG9taXplZCBJdGVyYXRpdmUgSW1wcm92ZW1lbnRcbiAqXG4gKiBAcGFyYW0gZmlyc3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIFJJSSAoIFsgc29sdXRpb24gLCBiZXN0IF0gLCBwaXZvdGUgLCBwaXZvdGluZyAsIHJhbmRvbSAsIHdhbGsgLCBhcHBseSAsIGV2YWx1YXRlICkge1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGlmICggcGl2b3RlKCApICkge1xuXG5cdFx0XHRjb25zdCBbIG11dGF0aW9uICwgZml0bmVzcyBdID0gcGl2b3RpbmcoIFsgc29sdXRpb24gLCBiZXN0IF0gLCB3YWxrICwgZXZhbHVhdGUgKSA7XG5cblx0XHRcdGlmICggbXV0YXRpb24gIT09IG51bGwgKSB7XG5cdFx0XHRcdGFwcGx5KCBzb2x1dGlvbiAsIG11dGF0aW9uICkgO1xuXHRcdFx0XHRiZXN0ID0gZml0bmVzcyA7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0Y29uc3QgbXV0YXRpb24gPSByYW5kb20oIGNhbmRpZGF0ZSApIDtcblxuXHRcdFx0YmVzdCA9IGV2YWx1YXRlKCBzb2x1dGlvbiAsIG11dGF0aW9uICkgO1xuXG5cdFx0XHRhcHBseSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdH1cblxuXHRcdHlpZWxkIFsgc29sdXRpb24gLCBiZXN0IF0gO1xuXG5cdH1cblxufVxuIl19