"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.VND = VND;

var _marked = [VND].map(regeneratorRuntime.mark);

/**
 * Variable Neighborhood Descent
 *
 * @param first
 */

function VND(_ref, N, neighborhoods) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    best = _ref2[1];

	var k, n, _n$pivoting, _n$pivoting2, mutation, fitness, _n$pivoting3, _n$pivoting4;

	return regeneratorRuntime.wrap(function VND$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					k = 0;

				case 1:
					if (!(k < N)) {
						_context.next = 20;
						break;
					}

					n = neighborhoods[k];
					_n$pivoting = n.pivoting([solution, best], n.walk, n.evaluate), _n$pivoting2 = _slicedToArray(_n$pivoting, 2), mutation = _n$pivoting2[0], fitness = _n$pivoting2[1];

				case 4:
					if (!(fitness > best)) {
						_context.next = 17;
						break;
					}

					best = fitness;
					n.apply(solution, mutation);

					_context.next = 9;
					return [solution, fitness];

				case 9:

					k = 0;
					n = neighborhoods[k];
					_n$pivoting3 = n.pivoting([solution, best], n.walk, n.evaluate);
					_n$pivoting4 = _slicedToArray(_n$pivoting3, 2);
					mutation = _n$pivoting4[0];
					fitness = _n$pivoting4[1];
					_context.next = 4;
					break;

				case 17:

					k += 1;

					_context.next = 1;
					break;

				case 20:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbHNlYXJjaC9WTkQuanMiXSwibmFtZXMiOlsiVk5EIiwiTiIsIm5laWdoYm9yaG9vZHMiLCJzb2x1dGlvbiIsImJlc3QiLCJrIiwibiIsInBpdm90aW5nIiwid2FsayIsImV2YWx1YXRlIiwibXV0YXRpb24iLCJmaXRuZXNzIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBT2lCQSxHLEdBQUFBLEc7O2VBQUFBLEc7O0FBTmpCOzs7Ozs7QUFNTyxTQUFVQSxHQUFWLE9BQXNDQyxDQUF0QyxFQUEwQ0MsYUFBMUM7QUFBQTtBQUFBLEtBQWtCQyxRQUFsQjtBQUFBLEtBQTZCQyxJQUE3Qjs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxNQUZFLEdBRUUsQ0FGRjs7QUFBQTtBQUFBLFdBSUVBLElBQUlKLENBSk47QUFBQTtBQUFBO0FBQUE7O0FBTURLLE1BTkMsR0FNR0osY0FBY0csQ0FBZCxDQU5IO0FBQUEsbUJBUXdCQyxFQUFFQyxRQUFGLENBQVksQ0FBRUosUUFBRixFQUFhQyxJQUFiLENBQVosRUFBa0NFLEVBQUVFLElBQXBDLEVBQTJDRixFQUFFRyxRQUE3QyxDQVJ4QixpREFRQ0MsUUFSRCxvQkFRWUMsT0FSWjs7QUFBQTtBQUFBLFdBVUdBLFVBQVVQLElBVmI7QUFBQTtBQUFBO0FBQUE7O0FBWUpBLFlBQU9PLE9BQVA7QUFDQUwsT0FBRU0sS0FBRixDQUFTVCxRQUFULEVBQW9CTyxRQUFwQjs7QUFiSTtBQUFBLFlBZUUsQ0FBRVAsUUFBRixFQUFhUSxPQUFiLENBZkY7O0FBQUE7O0FBaUJKTixTQUFJLENBQUo7QUFDQUMsU0FBSUosY0FBY0csQ0FBZCxDQUFKO0FBbEJJLG9CQW1CcUJDLEVBQUVDLFFBQUYsQ0FBWSxDQUFFSixRQUFGLEVBQWFDLElBQWIsQ0FBWixFQUFrQ0UsRUFBRUUsSUFBcEMsRUFBMkNGLEVBQUVHLFFBQTdDLENBbkJyQjtBQUFBO0FBbUJGQyxhQW5CRTtBQW1CU0MsWUFuQlQ7QUFBQTtBQUFBOztBQUFBOztBQXVCTE4sVUFBSyxDQUFMOztBQXZCSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IlZORC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBWYXJpYWJsZSBOZWlnaGJvcmhvb2QgRGVzY2VudFxuICpcbiAqIEBwYXJhbSBmaXJzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogVk5EICggWyBzb2x1dGlvbiAsIGJlc3QgXSAsIE4gLCBuZWlnaGJvcmhvb2RzICkge1xuXG5cdGxldCBrID0gMCA7XG5cblx0d2hpbGUgKCBrIDwgTiApIHtcblxuXHRcdGxldCBuID0gbmVpZ2hib3Job29kc1trXSA7XG5cblx0XHRsZXQgWyBtdXRhdGlvbiAsIGZpdG5lc3MgXSA9IG4ucGl2b3RpbmcoIFsgc29sdXRpb24gLCBiZXN0IF0gLCBuLndhbGsgLCBuLmV2YWx1YXRlICkgO1xuXG5cdFx0d2hpbGUgKCBmaXRuZXNzID4gYmVzdCApIHtcblxuXHRcdFx0YmVzdCA9IGZpdG5lc3MgO1xuXHRcdFx0bi5hcHBseSggc29sdXRpb24gLCBtdXRhdGlvbiApIDtcblxuXHRcdFx0eWllbGQgWyBzb2x1dGlvbiAsIGZpdG5lc3MgXSA7XG5cblx0XHRcdGsgPSAwIDtcblx0XHRcdG4gPSBuZWlnaGJvcmhvb2RzW2tdIDtcblx0XHRcdFsgbXV0YXRpb24gLCBmaXRuZXNzIF0gPSBuLnBpdm90aW5nKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgbi53YWxrICwgbi5ldmFsdWF0ZSApIDtcblxuXHRcdH1cblxuXHRcdGsgKz0gMSA7XG5cblx0fVxuXG59XG4iXX0=