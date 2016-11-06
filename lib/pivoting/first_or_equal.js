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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXZvdGluZy9maXJzdF9vcl9lcXVhbC5qcyJdLCJuYW1lcyI6WyJmaXJzdF9vcl9lcXVhbCIsIndhbGsiLCJldmFsdWF0ZSIsInNvbHV0aW9uIiwiYmVzdCIsImNhbmRpZGF0ZSIsIm11dGF0aW9uIiwiZml0bmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFNZ0JBLGMsR0FBQUEsYztBQU5oQjs7Ozs7O0FBTU8sU0FBU0EsY0FBVCxPQUFnREMsSUFBaEQsRUFBdURDLFFBQXZELEVBQWtFO0FBQUE7QUFBQSxLQUF0Q0MsUUFBc0M7QUFBQSxLQUEzQkMsSUFBMkI7O0FBRXhFLEtBQUlDLFlBQVksSUFBaEI7O0FBRndFO0FBQUE7QUFBQTs7QUFBQTtBQUl4RSx1QkFBd0JKLEtBQU1FLFFBQU4sQ0FBeEIsOEhBQTJDO0FBQUEsT0FBL0JHLFFBQStCOzs7QUFFMUMsT0FBTUMsVUFBVUwsU0FBVUMsUUFBVixFQUFxQkcsUUFBckIsQ0FBaEI7O0FBRUEsT0FBS0MsVUFBVUgsSUFBZixFQUFzQixPQUFPLENBQUVFLFFBQUYsRUFBYUMsT0FBYixDQUFQOztBQUV0QixPQUFLQSxZQUFZSCxJQUFqQixFQUF3Qjs7QUFFdkJDLGdCQUFZQyxRQUFaO0FBQ0FGLFdBQU9HLE9BQVA7QUFFQTtBQUVEO0FBakJ1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CeEUsUUFBTyxDQUFFRixTQUFGLEVBQWNELElBQWQsQ0FBUDtBQUVBIiwiZmlsZSI6ImZpcnN0X29yX2VxdWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBtdXRhdGlvbiB0aGF0IGltcHJvdmVzIHRoZSBmaXRuZXNzIHZhbHVlLiBJZiBzdWNoIGFcbiAqIG11dGF0aW9uIGRvZXMgbm90IGV4aXN0LCByZXR1cm5zIHRoZSBsYXN0IG11dGF0aW9uIHRoYXQga2VlcHMgZml0bmVzcyB0aGVcbiAqIHNhbWUsIG9yIG51bGwuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0X29yX2VxdWFsICggWyBzb2x1dGlvbiAsIGJlc3QgXSAsIHdhbGsgLCBldmFsdWF0ZSApIHtcblxuXHRsZXQgY2FuZGlkYXRlID0gbnVsbCA7XG5cblx0Zm9yICggY29uc3QgbXV0YXRpb24gb2Ygd2Fsayggc29sdXRpb24gKSApIHtcblxuXHRcdGNvbnN0IGZpdG5lc3MgPSBldmFsdWF0ZSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdGlmICggZml0bmVzcyA+IGJlc3QgKSByZXR1cm4gWyBtdXRhdGlvbiAsIGZpdG5lc3MgXSA7XG5cblx0XHRpZiAoIGZpdG5lc3MgPT09IGJlc3QgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZSA9IG11dGF0aW9uIDtcblx0XHRcdGJlc3QgPSBmaXRuZXNzIDtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIFsgY2FuZGlkYXRlICwgYmVzdCBdIDtcblxufVxuIl19