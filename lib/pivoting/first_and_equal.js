"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.first_and_equal = first_and_equal;
/**
 * Returns the first mutation that improves fitness or keeps the same fitness
 * value. If this mutation does not exist, returns null.
 *
 * @param first
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9maXJzdF9hbmRfZXF1YWwuanMiXSwibmFtZXMiOlsiZmlyc3RfYW5kX2VxdWFsIiwid2FsayIsImV2YWx1YXRlIiwic29sdXRpb24iLCJjdXJyZW50IiwibXV0YXRpb24iLCJmaXRuZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQU9nQkEsZSxHQUFBQSxlO0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsZUFBVCxPQUFvREMsSUFBcEQsRUFBMkRDLFFBQTNELEVBQXNFO0FBQUE7QUFBQSxNQUF6Q0MsUUFBeUM7QUFBQSxNQUE5QkMsT0FBOEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUU1RSx5QkFBd0JILEtBQU1FLFFBQU4sQ0FBeEIsOEhBQTJDO0FBQUEsVUFBL0JFLFFBQStCOzs7QUFFMUMsVUFBTUMsVUFBVUosU0FBVUMsUUFBVixFQUFxQkUsUUFBckIsQ0FBaEI7O0FBRUEsVUFBS0MsV0FBV0YsT0FBaEIsRUFBMEIsT0FBTyxDQUFFQyxRQUFGLEVBQWFDLE9BQWIsQ0FBUDtBQUUxQjtBQVIyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVU1RSxTQUFPLENBQUUsSUFBRixFQUFTRixPQUFULENBQVA7QUFFQSIsImZpbGUiOiJmaXJzdF9hbmRfZXF1YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IG11dGF0aW9uIHRoYXQgaW1wcm92ZXMgZml0bmVzcyBvciBrZWVwcyB0aGUgc2FtZSBmaXRuZXNzXG4gKiB2YWx1ZS4gSWYgdGhpcyBtdXRhdGlvbiBkb2VzIG5vdCBleGlzdCwgcmV0dXJucyBudWxsLlxuICpcbiAqIEBwYXJhbSBmaXJzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdF9hbmRfZXF1YWwgKCBbIHNvbHV0aW9uICwgY3VycmVudCBdICwgd2FsayAsIGV2YWx1YXRlICkge1xuXG5cdGZvciAoIGNvbnN0IG11dGF0aW9uIG9mIHdhbGsoIHNvbHV0aW9uICkgKSB7XG5cblx0XHRjb25zdCBmaXRuZXNzID0gZXZhbHVhdGUoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cblx0XHRpZiAoIGZpdG5lc3MgPj0gY3VycmVudCApIHJldHVybiBbIG11dGF0aW9uICwgZml0bmVzcyBdIDtcblxuXHR9XG5cblx0cmV0dXJuIFsgbnVsbCAsIGN1cnJlbnQgXSA7XG5cbn1cbiJdfQ==