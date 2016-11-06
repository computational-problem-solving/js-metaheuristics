"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.PII = PII;

var _marked = [PII].map(regeneratorRuntime.mark);

/**
 * Probabilistic Iterative Improvement
 *
 * @param first
 */

function PII(_ref, random, accept, evaluate, apply) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    best = _ref2[1];

	var mutation, fitness;
	return regeneratorRuntime.wrap(function PII$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!true) {
						_context.next = 8;
						break;
					}

					mutation = random(solution);
					fitness = evaluate(solution, mutation);


					if (fitness >= best || accept(fitness, best)) {

						apply(solution, mutation);
						best = fitness;
					}

					_context.next = 6;
					return [solution, best];

				case 6:
					_context.next = 0;
					break;

				case 8:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvUElJLmpzIl0sIm5hbWVzIjpbIlBJSSIsInJhbmRvbSIsImFjY2VwdCIsImV2YWx1YXRlIiwiYXBwbHkiLCJzb2x1dGlvbiIsImJlc3QiLCJtdXRhdGlvbiIsImZpdG5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBT2lCQSxHLEdBQUFBLEc7O2VBQUFBLEc7O0FBTmpCOzs7Ozs7QUFNTyxTQUFVQSxHQUFWLE9BQXNDQyxNQUF0QyxFQUErQ0MsTUFBL0MsRUFBd0RDLFFBQXhELEVBQW1FQyxLQUFuRTtBQUFBO0FBQUEsS0FBa0JDLFFBQWxCO0FBQUEsS0FBNkJDLElBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVFLElBRkY7QUFBQTtBQUFBO0FBQUE7O0FBSUNDLGFBSkQsR0FJWU4sT0FBUUksUUFBUixDQUpaO0FBTUNHLFlBTkQsR0FNV0wsU0FBVUUsUUFBVixFQUFxQkUsUUFBckIsQ0FOWDs7O0FBUUwsU0FBS0MsV0FBV0YsSUFBWCxJQUFtQkosT0FBUU0sT0FBUixFQUFrQkYsSUFBbEIsQ0FBeEIsRUFBbUQ7O0FBRWxERixZQUFPQyxRQUFQLEVBQWtCRSxRQUFsQjtBQUNBRCxhQUFPRSxPQUFQO0FBRUE7O0FBYkk7QUFBQSxZQWVDLENBQUVILFFBQUYsRUFBYUMsSUFBYixDQWZEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJQSUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUHJvYmFiaWxpc3RpYyBJdGVyYXRpdmUgSW1wcm92ZW1lbnRcbiAqXG4gKiBAcGFyYW0gZmlyc3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIFBJSSAoIFsgc29sdXRpb24gLCBiZXN0IF0gLCByYW5kb20gLCBhY2NlcHQgLCBldmFsdWF0ZSAsIGFwcGx5ICkge1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IG11dGF0aW9uID0gcmFuZG9tKCBzb2x1dGlvbiApIDtcblxuXHRcdGNvbnN0IGZpdG5lc3MgPSBldmFsdWF0ZSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdGlmICggZml0bmVzcyA+PSBiZXN0IHx8IGFjY2VwdCggZml0bmVzcyAsIGJlc3QgKSApIHtcblxuXHRcdFx0YXBwbHkoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cdFx0XHRiZXN0ID0gZml0bmVzcyA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBbIHNvbHV0aW9uICwgYmVzdCBdIDtcblxuXHR9XG5cbn1cbiJdfQ==