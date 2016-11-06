"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.first_or_equal = first_or_equal;
/**
 * Returns the first mutation that improves the fitness value. If such a
 * mutation does not exist, returns the last mutation that keeps fitness the
 * same, or null.
 *
 * @param first
 */

function first_or_equal(_ref, walk, evaluate) {
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

			if (fitness > best) return [mutation, fitness];

			if (fitness === best) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9maXJzdF9vcl9lcXVhbC5qcyJdLCJuYW1lcyI6WyJmaXJzdF9vcl9lcXVhbCIsIndhbGsiLCJldmFsdWF0ZSIsInNvbHV0aW9uIiwiYmVzdCIsImNhbmRpZGF0ZSIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFRZ0JBLGMsR0FBQUEsYztBQVJoQjs7Ozs7Ozs7QUFRTyxTQUFTQSxjQUFULE9BQWdEQyxJQUFoRCxFQUF1REMsUUFBdkQsRUFBa0U7QUFBQTtBQUFBLEtBQXRDQyxRQUFzQztBQUFBLEtBQTNCQyxJQUEyQjs7QUFFeEUsS0FBSUMsWUFBWSxJQUFoQjs7QUFGd0U7QUFBQTtBQUFBOztBQUFBO0FBSXhFLHVCQUF3QkosS0FBTUUsUUFBTixDQUF4Qiw4SEFBMkM7QUFBQSxPQUEvQkcsUUFBK0I7OztBQUUxQyxPQUFNQyxVQUFVTCxTQUFVQyxRQUFWLEVBQXFCRyxRQUFyQixDQUFoQjs7QUFFQSxPQUFLQyxVQUFVSCxJQUFmLEVBQXNCLE9BQU8sQ0FBRUUsUUFBRixFQUFhQyxPQUFiLENBQVA7O0FBRXRCLE9BQUtBLFlBQVlILElBQWpCLEVBQXdCOztBQUV2QkMsZ0JBQVlDLFFBQVo7QUFDQUYsV0FBT0csT0FBUDtBQUVBO0FBRUQ7QUFqQnVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUJ4RSxRQUFPLENBQUVGLFNBQUYsRUFBY0QsSUFBZCxDQUFQO0FBRUEiLCJmaWxlIjoiZmlyc3Rfb3JfZXF1YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IG11dGF0aW9uIHRoYXQgaW1wcm92ZXMgdGhlIGZpdG5lc3MgdmFsdWUuIElmIHN1Y2ggYVxuICogbXV0YXRpb24gZG9lcyBub3QgZXhpc3QsIHJldHVybnMgdGhlIGxhc3QgbXV0YXRpb24gdGhhdCBrZWVwcyBmaXRuZXNzIHRoZVxuICogc2FtZSwgb3IgbnVsbC5cbiAqXG4gKiBAcGFyYW0gZmlyc3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3Rfb3JfZXF1YWwgKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgd2FsayAsIGV2YWx1YXRlICkge1xuXG5cdGxldCBjYW5kaWRhdGUgPSBudWxsIDtcblxuXHRmb3IgKCBjb25zdCBtdXRhdGlvbiBvZiB3YWxrKCBzb2x1dGlvbiApICkge1xuXG5cdFx0Y29uc3QgZml0bmVzcyA9IGV2YWx1YXRlKCBzb2x1dGlvbiAsIG11dGF0aW9uICkgO1xuXG5cdFx0aWYgKCBmaXRuZXNzID4gYmVzdCApIHJldHVybiBbIG11dGF0aW9uICwgZml0bmVzcyBdIDtcblxuXHRcdGlmICggZml0bmVzcyA9PT0gYmVzdCApIHtcblxuXHRcdFx0Y2FuZGlkYXRlID0gbXV0YXRpb24gO1xuXHRcdFx0YmVzdCA9IGZpdG5lc3MgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gWyBjYW5kaWRhdGUgLCBiZXN0IF0gO1xuXG59XG4iXX0=