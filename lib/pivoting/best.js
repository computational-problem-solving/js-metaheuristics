"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.best = best;
/**
 * Returns the mutation that improves fitness the most.
 * If this mutation does not exist, returns null.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9iZXN0LmpzIl0sIm5hbWVzIjpbImJlc3QiLCJ3YWxrIiwiZXZhbHVhdGUiLCJzb2x1dGlvbiIsImNhbmRpZGF0ZSIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFLZ0JBLEksR0FBQUEsSTtBQUxoQjs7Ozs7QUFLTyxTQUFTQSxJQUFULE9BQXNDQyxJQUF0QyxFQUE2Q0MsUUFBN0MsRUFBd0Q7QUFBQTtBQUFBLEtBQXRDQyxRQUFzQztBQUFBLEtBQTNCSCxJQUEyQjs7QUFFOUQsS0FBSUksWUFBWSxJQUFoQjs7QUFGOEQ7QUFBQTtBQUFBOztBQUFBO0FBSTlELHVCQUF3QkgsS0FBTUUsUUFBTixDQUF4Qiw4SEFBMkM7QUFBQSxPQUEvQkUsUUFBK0I7OztBQUUxQyxPQUFNQyxVQUFVSixTQUFVQyxRQUFWLEVBQXFCRSxRQUFyQixDQUFoQjs7QUFFQSxPQUFLQyxVQUFVTixJQUFmLEVBQXNCOztBQUVyQkksZ0JBQVlDLFFBQVo7QUFDQUwsV0FBT00sT0FBUDtBQUVBO0FBRUQ7QUFmNkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQjlELFFBQU8sQ0FBRUYsU0FBRixFQUFjSixJQUFkLENBQVA7QUFFQSIsImZpbGUiOiJiZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRoZSBtdXRhdGlvbiB0aGF0IGltcHJvdmVzIGZpdG5lc3MgdGhlIG1vc3QuXG4gKiBJZiB0aGlzIG11dGF0aW9uIGRvZXMgbm90IGV4aXN0LCByZXR1cm5zIG51bGwuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJlc3QgKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgd2FsayAsIGV2YWx1YXRlICkge1xuXG5cdGxldCBjYW5kaWRhdGUgPSBudWxsIDtcblxuXHRmb3IgKCBjb25zdCBtdXRhdGlvbiBvZiB3YWxrKCBzb2x1dGlvbiApICkge1xuXG5cdFx0Y29uc3QgZml0bmVzcyA9IGV2YWx1YXRlKCBzb2x1dGlvbiAsIG11dGF0aW9uICkgO1xuXG5cdFx0aWYgKCBmaXRuZXNzID4gYmVzdCApIHtcblxuXHRcdFx0Y2FuZGlkYXRlID0gbXV0YXRpb24gO1xuXHRcdFx0YmVzdCA9IGZpdG5lc3MgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gWyBjYW5kaWRhdGUgLCBiZXN0IF0gO1xuXG59XG4iXX0=