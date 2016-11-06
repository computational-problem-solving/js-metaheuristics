"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.first_and_equal = first_and_equal;
/**
 * Returns the first mutation that improves fitness or keeps the same fitness
 * value. If this mutation does not exist, returns null.
 */

function first_and_equal(_ref, walk, evaluate) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    current = _ref2[1];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {

		for (var _iterator = walk(solution)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var mutation = _step.value;


			var fitness = evaluate(solution, mutation);

			if (fitness >= current) return [mutation, fitness];
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

	return [null, current];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9maXJzdF9hbmRfZXF1YWwuanMiXSwibmFtZXMiOlsiZmlyc3RfYW5kX2VxdWFsIiwid2FsayIsImV2YWx1YXRlIiwic29sdXRpb24iLCJjdXJyZW50IiwibXV0YXRpb24iLCJmaXRuZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUtnQkEsZSxHQUFBQSxlO0FBTGhCOzs7OztBQUtPLFNBQVNBLGVBQVQsT0FBb0RDLElBQXBELEVBQTJEQyxRQUEzRCxFQUFzRTtBQUFBO0FBQUEsS0FBekNDLFFBQXlDO0FBQUEsS0FBOUJDLE9BQThCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFNUUsdUJBQXdCSCxLQUFNRSxRQUFOLENBQXhCLDhIQUEyQztBQUFBLE9BQS9CRSxRQUErQjs7O0FBRTFDLE9BQU1DLFVBQVVKLFNBQVVDLFFBQVYsRUFBcUJFLFFBQXJCLENBQWhCOztBQUVBLE9BQUtDLFdBQVdGLE9BQWhCLEVBQTBCLE9BQU8sQ0FBRUMsUUFBRixFQUFhQyxPQUFiLENBQVA7QUFFMUI7QUFSMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVNUUsUUFBTyxDQUFFLElBQUYsRUFBU0YsT0FBVCxDQUFQO0FBRUEiLCJmaWxlIjoiZmlyc3RfYW5kX2VxdWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBtdXRhdGlvbiB0aGF0IGltcHJvdmVzIGZpdG5lc3Mgb3Iga2VlcHMgdGhlIHNhbWUgZml0bmVzc1xuICogdmFsdWUuIElmIHRoaXMgbXV0YXRpb24gZG9lcyBub3QgZXhpc3QsIHJldHVybnMgbnVsbC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RfYW5kX2VxdWFsICggWyBzb2x1dGlvbiAsIGN1cnJlbnQgXSAsIHdhbGsgLCBldmFsdWF0ZSApIHtcblxuXHRmb3IgKCBjb25zdCBtdXRhdGlvbiBvZiB3YWxrKCBzb2x1dGlvbiApICkge1xuXG5cdFx0Y29uc3QgZml0bmVzcyA9IGV2YWx1YXRlKCBzb2x1dGlvbiAsIG11dGF0aW9uICkgO1xuXG5cdFx0aWYgKCBmaXRuZXNzID49IGN1cnJlbnQgKSByZXR1cm4gWyBtdXRhdGlvbiAsIGZpdG5lc3MgXSA7XG5cblx0fVxuXG5cdHJldHVybiBbIG51bGwgLCBjdXJyZW50IF0gO1xuXG59XG4iXX0=