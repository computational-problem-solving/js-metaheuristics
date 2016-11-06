"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.VND = VND;

var _marked = [VND].map(regeneratorRuntime.mark);

/**
 * Variable Neighborhood Descent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbHNlYXJjaC9WTkQuanMiXSwibmFtZXMiOlsiVk5EIiwiTiIsIm5laWdoYm9yaG9vZHMiLCJzb2x1dGlvbiIsImJlc3QiLCJrIiwibiIsInBpdm90aW5nIiwid2FsayIsImV2YWx1YXRlIiwibXV0YXRpb24iLCJmaXRuZXNzIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBS2lCQSxHLEdBQUFBLEc7O2VBQUFBLEc7O0FBSmpCOzs7O0FBSU8sU0FBVUEsR0FBVixPQUFzQ0MsQ0FBdEMsRUFBMENDLGFBQTFDO0FBQUE7QUFBQSxLQUFrQkMsUUFBbEI7QUFBQSxLQUE2QkMsSUFBN0I7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsTUFGRSxHQUVFLENBRkY7O0FBQUE7QUFBQSxXQUlFQSxJQUFJSixDQUpOO0FBQUE7QUFBQTtBQUFBOztBQU1ESyxNQU5DLEdBTUdKLGNBQWNHLENBQWQsQ0FOSDtBQUFBLG1CQVF3QkMsRUFBRUMsUUFBRixDQUFZLENBQUVKLFFBQUYsRUFBYUMsSUFBYixDQUFaLEVBQWtDRSxFQUFFRSxJQUFwQyxFQUEyQ0YsRUFBRUcsUUFBN0MsQ0FSeEIsaURBUUNDLFFBUkQsb0JBUVlDLE9BUlo7O0FBQUE7QUFBQSxXQVVHQSxVQUFVUCxJQVZiO0FBQUE7QUFBQTtBQUFBOztBQVlKQSxZQUFPTyxPQUFQO0FBQ0FMLE9BQUVNLEtBQUYsQ0FBU1QsUUFBVCxFQUFvQk8sUUFBcEI7O0FBYkk7QUFBQSxZQWVFLENBQUVQLFFBQUYsRUFBYVEsT0FBYixDQWZGOztBQUFBOztBQWlCSk4sU0FBSSxDQUFKO0FBQ0FDLFNBQUlKLGNBQWNHLENBQWQsQ0FBSjtBQWxCSSxvQkFtQnFCQyxFQUFFQyxRQUFGLENBQVksQ0FBRUosUUFBRixFQUFhQyxJQUFiLENBQVosRUFBa0NFLEVBQUVFLElBQXBDLEVBQTJDRixFQUFFRyxRQUE3QyxDQW5CckI7QUFBQTtBQW1CRkMsYUFuQkU7QUFtQlNDLFlBbkJUO0FBQUE7QUFBQTs7QUFBQTs7QUF1QkxOLFVBQUssQ0FBTDs7QUF2Qks7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJWTkQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogVmFyaWFibGUgTmVpZ2hib3Job29kIERlc2NlbnRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIFZORCAoIFsgc29sdXRpb24gLCBiZXN0IF0gLCBOICwgbmVpZ2hib3Job29kcyApIHtcblxuXHRsZXQgayA9IDAgO1xuXG5cdHdoaWxlICggayA8IE4gKSB7XG5cblx0XHRsZXQgbiA9IG5laWdoYm9yaG9vZHNba10gO1xuXG5cdFx0bGV0IFsgbXV0YXRpb24gLCBmaXRuZXNzIF0gPSBuLnBpdm90aW5nKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgbi53YWxrICwgbi5ldmFsdWF0ZSApIDtcblxuXHRcdHdoaWxlICggZml0bmVzcyA+IGJlc3QgKSB7XG5cblx0XHRcdGJlc3QgPSBmaXRuZXNzIDtcblx0XHRcdG4uYXBwbHkoIHNvbHV0aW9uICwgbXV0YXRpb24gKSA7XG5cblx0XHRcdHlpZWxkIFsgc29sdXRpb24gLCBmaXRuZXNzIF0gO1xuXG5cdFx0XHRrID0gMCA7XG5cdFx0XHRuID0gbmVpZ2hib3Job29kc1trXSA7XG5cdFx0XHRbIG11dGF0aW9uICwgZml0bmVzcyBdID0gbi5waXZvdGluZyggWyBzb2x1dGlvbiAsIGJlc3QgXSAsIG4ud2FsayAsIG4uZXZhbHVhdGUgKSA7XG5cblx0XHR9XG5cblx0XHRrICs9IDEgO1xuXG5cdH1cblxufVxuIl19