"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.RII = RII;

var _marked = [RII].map(regeneratorRuntime.mark);

/**
 * Randomized Iterative Improvement
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvUklJLmpzIl0sIm5hbWVzIjpbIlJJSSIsInBpdm90ZSIsInBpdm90aW5nIiwicmFuZG9tIiwid2FsayIsImFwcGx5IiwiZXZhbHVhdGUiLCJzb2x1dGlvbiIsImJlc3QiLCJtdXRhdGlvbiIsImZpdG5lc3MiLCJjYW5kaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBS2lCQSxHLEdBQUFBLEc7O2VBQUFBLEc7O0FBSmpCOzs7O0FBSU8sU0FBVUEsR0FBVixPQUFzQ0MsTUFBdEMsRUFBK0NDLFFBQS9DLEVBQTBEQyxNQUExRCxFQUFtRUMsSUFBbkUsRUFBMEVDLEtBQTFFLEVBQWtGQyxRQUFsRjtBQUFBO0FBQUEsS0FBa0JDLFFBQWxCO0FBQUEsS0FBNkJDLElBQTdCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRSxJQUZGO0FBQUE7QUFBQTtBQUFBOztBQUlMLFNBQUtQLFFBQUwsRUFBaUI7QUFBQSxrQkFFZUMsU0FBVSxDQUFFSyxRQUFGLEVBQWFDLElBQWIsQ0FBVixFQUFnQ0osSUFBaEMsRUFBdUNFLFFBQXZDLENBRmYsNkNBRVJHLFFBRlEsa0JBRUdDLE9BRkg7OztBQUloQixVQUFLRCxhQUFhLElBQWxCLEVBQXlCO0FBQ3hCSixhQUFPRSxRQUFQLEVBQWtCRSxRQUFsQjtBQUNBRCxjQUFPRSxPQUFQO0FBQ0E7QUFFRCxNQVRELE1BV0s7QUFFRUQsZUFGRixHQUVhTixPQUFRUSxTQUFSLENBRmI7OztBQUlKSCxhQUFPRixTQUFVQyxRQUFWLEVBQXFCRSxTQUFyQixDQUFQOztBQUVBSixZQUFPRSxRQUFQLEVBQWtCRSxTQUFsQjtBQUVBOztBQXZCSTtBQUFBLFlBeUJDLENBQUVGLFFBQUYsRUFBYUMsSUFBYixDQXpCRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiUklJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFJhbmRvbWl6ZWQgSXRlcmF0aXZlIEltcHJvdmVtZW50XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBSSUkgKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgcGl2b3RlICwgcGl2b3RpbmcgLCByYW5kb20gLCB3YWxrICwgYXBwbHkgLCBldmFsdWF0ZSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRpZiAoIHBpdm90ZSggKSApIHtcblxuXHRcdFx0Y29uc3QgWyBtdXRhdGlvbiAsIGZpdG5lc3MgXSA9IHBpdm90aW5nKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgd2FsayAsIGV2YWx1YXRlICkgO1xuXG5cdFx0XHRpZiAoIG11dGF0aW9uICE9PSBudWxsICkge1xuXHRcdFx0XHRhcHBseSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblx0XHRcdFx0YmVzdCA9IGZpdG5lc3MgO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cblx0XHRcdGNvbnN0IG11dGF0aW9uID0gcmFuZG9tKCBjYW5kaWRhdGUgKSA7XG5cblx0XHRcdGJlc3QgPSBldmFsdWF0ZSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdFx0YXBwbHkoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cblx0XHR9XG5cblx0XHR5aWVsZCBbIHNvbHV0aW9uICwgYmVzdCBdIDtcblxuXHR9XG5cbn1cbiJdfQ==