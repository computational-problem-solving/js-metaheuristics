"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.first = first;
/**
 * Returns the first mutation that improves fitness.
 * If this mutation does not exist, returns null.
 *
 * @param first
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9maXJzdC5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsIndhbGsiLCJldmFsdWF0ZSIsInNvbHV0aW9uIiwiY3VycmVudCIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFPZ0JBLEssR0FBQUEsSztBQVBoQjs7Ozs7OztBQU9PLFNBQVNBLEtBQVQsT0FBMENDLElBQTFDLEVBQWlEQyxRQUFqRCxFQUE0RDtBQUFBO0FBQUEsTUFBekNDLFFBQXlDO0FBQUEsTUFBOUJDLE9BQThCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFbEUseUJBQXdCSCxLQUFNRSxRQUFOLENBQXhCLDhIQUEyQztBQUFBLFVBQS9CRSxRQUErQjs7O0FBRTFDLFVBQU1DLFVBQVVKLFNBQVVDLFFBQVYsRUFBcUJFLFFBQXJCLENBQWhCOztBQUVBLFVBQUtDLFVBQVVGLE9BQWYsRUFBeUIsT0FBTyxDQUFFQyxRQUFGLEVBQWFDLE9BQWIsQ0FBUDtBQUV6QjtBQVJpRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVsRSxTQUFPLENBQUUsSUFBRixFQUFTRixPQUFULENBQVA7QUFFQSIsImZpbGUiOiJmaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgbXV0YXRpb24gdGhhdCBpbXByb3ZlcyBmaXRuZXNzLlxuICogSWYgdGhpcyBtdXRhdGlvbiBkb2VzIG5vdCBleGlzdCwgcmV0dXJucyBudWxsLlxuICpcbiAqIEBwYXJhbSBmaXJzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdCAoIFsgc29sdXRpb24gLCBjdXJyZW50IF0gLCB3YWxrICwgZXZhbHVhdGUgKSB7XG5cblx0Zm9yICggY29uc3QgbXV0YXRpb24gb2Ygd2Fsayggc29sdXRpb24gKSApIHtcblxuXHRcdGNvbnN0IGZpdG5lc3MgPSBldmFsdWF0ZSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdGlmICggZml0bmVzcyA+IGN1cnJlbnQgKSByZXR1cm4gWyBtdXRhdGlvbiAsIGZpdG5lc3MgXSA7XG5cblx0fVxuXG5cdHJldHVybiBbIG51bGwgLCBjdXJyZW50IF0gO1xuXG59XG4iXX0=