"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.best = best;
/**
 * Returns the mutation that improves fitness the most.
 * If this mutation does not exist, returns null.
 *
 * @param first
 */

function best(_ref, walk, evaluate) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    best = _ref2[1];

	var candidate = null;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = walk(solution)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var mutation = _step.value;


			var fitness = evaluate(solution, mutation);

			if (fitness > best) {

				candidate = mutation;
				best = fitness;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return [candidate, best];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9iZXN0LmpzIl0sIm5hbWVzIjpbImJlc3QiLCJ3YWxrIiwiZXZhbHVhdGUiLCJzb2x1dGlvbiIsImNhbmRpZGF0ZSIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFPZ0JBLEksR0FBQUEsSTtBQVBoQjs7Ozs7OztBQU9PLFNBQVNBLElBQVQsT0FBc0NDLElBQXRDLEVBQTZDQyxRQUE3QyxFQUF3RDtBQUFBO0FBQUEsS0FBdENDLFFBQXNDO0FBQUEsS0FBM0JILElBQTJCOztBQUU5RCxLQUFJSSxZQUFZLElBQWhCOztBQUY4RDtBQUFBO0FBQUE7O0FBQUE7QUFJOUQsdUJBQXdCSCxLQUFNRSxRQUFOLENBQXhCLDhIQUEyQztBQUFBLE9BQS9CRSxRQUErQjs7O0FBRTFDLE9BQU1DLFVBQVVKLFNBQVVDLFFBQVYsRUFBcUJFLFFBQXJCLENBQWhCOztBQUVBLE9BQUtDLFVBQVVOLElBQWYsRUFBc0I7O0FBRXJCSSxnQkFBWUMsUUFBWjtBQUNBTCxXQUFPTSxPQUFQO0FBRUE7QUFFRDtBQWY2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCOUQsUUFBTyxDQUFFRixTQUFGLEVBQWNKLElBQWQsQ0FBUDtBQUVBIiwiZmlsZSI6ImJlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgdGhlIG11dGF0aW9uIHRoYXQgaW1wcm92ZXMgZml0bmVzcyB0aGUgbW9zdC5cbiAqIElmIHRoaXMgbXV0YXRpb24gZG9lcyBub3QgZXhpc3QsIHJldHVybnMgbnVsbC5cbiAqXG4gKiBAcGFyYW0gZmlyc3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmVzdCAoIFsgc29sdXRpb24gLCBiZXN0IF0gLCB3YWxrICwgZXZhbHVhdGUgKSB7XG5cblx0bGV0IGNhbmRpZGF0ZSA9IG51bGwgO1xuXG5cdGZvciAoIGNvbnN0IG11dGF0aW9uIG9mIHdhbGsoIHNvbHV0aW9uICkgKSB7XG5cblx0XHRjb25zdCBmaXRuZXNzID0gZXZhbHVhdGUoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cblx0XHRpZiAoIGZpdG5lc3MgPiBiZXN0ICkge1xuXG5cdFx0XHRjYW5kaWRhdGUgPSBtdXRhdGlvbiA7XG5cdFx0XHRiZXN0ID0gZml0bmVzcyA7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBbIGNhbmRpZGF0ZSAsIGJlc3QgXSA7XG5cbn1cbiJdfQ==