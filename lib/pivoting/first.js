"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.first = first;
/**
 * Returns the first mutation that improves fitness.
 * If this mutation does not exist, returns null.
 */

function first(_ref, walk, evaluate) {
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

			if (fitness > current) return [mutation, fitness];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9maXJzdC5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsIndhbGsiLCJldmFsdWF0ZSIsInNvbHV0aW9uIiwiY3VycmVudCIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFLZ0JBLEssR0FBQUEsSztBQUxoQjs7Ozs7QUFLTyxTQUFTQSxLQUFULE9BQTBDQyxJQUExQyxFQUFpREMsUUFBakQsRUFBNEQ7QUFBQTtBQUFBLEtBQXpDQyxRQUF5QztBQUFBLEtBQTlCQyxPQUE4Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWxFLHVCQUF3QkgsS0FBTUUsUUFBTixDQUF4Qiw4SEFBMkM7QUFBQSxPQUEvQkUsUUFBK0I7OztBQUUxQyxPQUFNQyxVQUFVSixTQUFVQyxRQUFWLEVBQXFCRSxRQUFyQixDQUFoQjs7QUFFQSxPQUFLQyxVQUFVRixPQUFmLEVBQXlCLE9BQU8sQ0FBRUMsUUFBRixFQUFhQyxPQUFiLENBQVA7QUFFekI7QUFSaUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVbEUsUUFBTyxDQUFFLElBQUYsRUFBU0YsT0FBVCxDQUFQO0FBRUEiLCJmaWxlIjoiZmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IG11dGF0aW9uIHRoYXQgaW1wcm92ZXMgZml0bmVzcy5cbiAqIElmIHRoaXMgbXV0YXRpb24gZG9lcyBub3QgZXhpc3QsIHJldHVybnMgbnVsbC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QgKCBbIHNvbHV0aW9uICwgY3VycmVudCBdICwgd2FsayAsIGV2YWx1YXRlICkge1xuXG5cdGZvciAoIGNvbnN0IG11dGF0aW9uIG9mIHdhbGsoIHNvbHV0aW9uICkgKSB7XG5cblx0XHRjb25zdCBmaXRuZXNzID0gZXZhbHVhdGUoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cblx0XHRpZiAoIGZpdG5lc3MgPiBjdXJyZW50ICkgcmV0dXJuIFsgbXV0YXRpb24gLCBmaXRuZXNzIF0gO1xuXG5cdH1cblxuXHRyZXR1cm4gWyBudWxsICwgY3VycmVudCBdIDtcblxufVxuIl19