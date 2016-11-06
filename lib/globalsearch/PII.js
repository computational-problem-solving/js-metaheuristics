"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.PII = PII;

var _marked = [PII].map(regeneratorRuntime.mark);

/**
 * Probabilistic Iterative Improvement
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvUElJLmpzIl0sIm5hbWVzIjpbIlBJSSIsInJhbmRvbSIsImFjY2VwdCIsImV2YWx1YXRlIiwiYXBwbHkiLCJzb2x1dGlvbiIsImJlc3QiLCJtdXRhdGlvbiIsImZpdG5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBS2lCQSxHLEdBQUFBLEc7O2VBQUFBLEc7O0FBSmpCOzs7O0FBSU8sU0FBVUEsR0FBVixPQUFzQ0MsTUFBdEMsRUFBK0NDLE1BQS9DLEVBQXdEQyxRQUF4RCxFQUFtRUMsS0FBbkU7QUFBQTtBQUFBLEtBQWtCQyxRQUFsQjtBQUFBLEtBQTZCQyxJQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRSxJQUZGO0FBQUE7QUFBQTtBQUFBOztBQUlDQyxhQUpELEdBSVlOLE9BQVFJLFFBQVIsQ0FKWjtBQU1DRyxZQU5ELEdBTVdMLFNBQVVFLFFBQVYsRUFBcUJFLFFBQXJCLENBTlg7OztBQVFMLFNBQUtDLFdBQVdGLElBQVgsSUFBbUJKLE9BQVFNLE9BQVIsRUFBa0JGLElBQWxCLENBQXhCLEVBQW1EOztBQUVsREYsWUFBT0MsUUFBUCxFQUFrQkUsUUFBbEI7QUFDQUQsYUFBT0UsT0FBUDtBQUVBOztBQWJJO0FBQUEsWUFlQyxDQUFFSCxRQUFGLEVBQWFDLElBQWIsQ0FmRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiUElJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFByb2JhYmlsaXN0aWMgSXRlcmF0aXZlIEltcHJvdmVtZW50XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBQSUkgKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgcmFuZG9tICwgYWNjZXB0ICwgZXZhbHVhdGUgLCBhcHBseSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCBtdXRhdGlvbiA9IHJhbmRvbSggc29sdXRpb24gKSA7XG5cblx0XHRjb25zdCBmaXRuZXNzID0gZXZhbHVhdGUoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cblx0XHRpZiAoIGZpdG5lc3MgPj0gYmVzdCB8fCBhY2NlcHQoIGZpdG5lc3MgLCBiZXN0ICkgKSB7XG5cblx0XHRcdGFwcGx5KCBzb2x1dGlvbiAsIG11dGF0aW9uICkgO1xuXHRcdFx0YmVzdCA9IGZpdG5lc3MgO1xuXG5cdFx0fVxuXG5cdFx0eWllbGQgWyBzb2x1dGlvbiAsIGJlc3QgXSA7XG5cblx0fVxuXG59XG4iXX0=