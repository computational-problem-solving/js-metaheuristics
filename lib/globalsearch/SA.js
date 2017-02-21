"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.SA = SA;

var _marked = [SA].map(regeneratorRuntime.mark);

/**
 * Simulated Annealing
 *
 * @param first
 */

function SA(_ref, pivoting, walk, evaluate, accept, apply, improvement, temperature, cooldown) {
	var _ref2 = _slicedToArray(_ref, 2),
	    solution = _ref2[0],
	    best = _ref2[1];

	var t, candidate, current, _pivoting, _pivoting2, mutation, fitness;

	return regeneratorRuntime.wrap(function SA$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					t = temperature;
					candidate = solution;
					current = best;

				case 3:
					if (!true) {
						_context.next = 11;
						break;
					}

					_pivoting = pivoting([candidate, current], walk, evaluate), _pivoting2 = _slicedToArray(_pivoting, 2), mutation = _pivoting2[0], fitness = _pivoting2[1];


					if (fitness >= current || accept(fitness, current, t)) {

						current = fitness;
						apply(candidate, mutation);

						if (fitness > best) {

							best = fitness;
							improvement(candidate);
						}
					}

					_context.next = 8;
					return [candidate, current];

				case 8:

					t = cooldown(t);

					_context.next = 3;
					break;

				case 11:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvU0EuanMiXSwibmFtZXMiOlsiU0EiLCJwaXZvdGluZyIsIndhbGsiLCJldmFsdWF0ZSIsImFjY2VwdCIsImFwcGx5IiwiaW1wcm92ZW1lbnQiLCJ0ZW1wZXJhdHVyZSIsImNvb2xkb3duIiwic29sdXRpb24iLCJiZXN0IiwidCIsImNhbmRpZGF0ZSIsImN1cnJlbnQiLCJtdXRhdGlvbiIsImZpdG5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBT2lCQSxFLEdBQUFBLEU7O2VBQUFBLEU7O0FBTmpCOzs7Ozs7QUFNTyxTQUFVQSxFQUFWLE9BQXFDQyxRQUFyQyxFQUFnREMsSUFBaEQsRUFBdURDLFFBQXZELEVBQWtFQyxNQUFsRSxFQUEyRUMsS0FBM0UsRUFBbUZDLFdBQW5GLEVBQWlHQyxXQUFqRyxFQUErR0MsUUFBL0c7QUFBQTtBQUFBLEtBQWlCQyxRQUFqQjtBQUFBLEtBQTRCQyxJQUE1Qjs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVGQyxNQUZFLEdBRUVKLFdBRkY7QUFHRkssY0FIRSxHQUdVSCxRQUhWO0FBSUZJLFlBSkUsR0FJUUgsSUFKUjs7QUFBQTtBQUFBLFVBTUUsSUFORjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQkFRMEJULFNBQVUsQ0FBRVcsU0FBRixFQUFjQyxPQUFkLENBQVYsRUFBb0NYLElBQXBDLEVBQTJDQyxRQUEzQyxDQVIxQiw2Q0FRR1csUUFSSCxrQkFRY0MsT0FSZDs7O0FBVUwsU0FBS0EsV0FBV0YsT0FBWCxJQUFzQlQsT0FBUVcsT0FBUixFQUFrQkYsT0FBbEIsRUFBNEJGLENBQTVCLENBQTNCLEVBQTZEOztBQUU1REUsZ0JBQVVFLE9BQVY7QUFDQVYsWUFBT08sU0FBUCxFQUFtQkUsUUFBbkI7O0FBRUEsVUFBS0MsVUFBVUwsSUFBZixFQUFzQjs7QUFFckJBLGNBQU9LLE9BQVA7QUFDQVQsbUJBQWFNLFNBQWI7QUFFQTtBQUVEOztBQXRCSTtBQUFBLFlBd0JDLENBQUVBLFNBQUYsRUFBY0MsT0FBZCxDQXhCRDs7QUFBQTs7QUEwQkxGLFNBQUlILFNBQVVHLENBQVYsQ0FBSjs7QUExQks7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJTQS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBTaW11bGF0ZWQgQW5uZWFsaW5nXG4gKlxuICogQHBhcmFtIGZpcnN0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBTQSAoIFsgc29sdXRpb24gLCBiZXN0IF0gLCBwaXZvdGluZyAsIHdhbGsgLCBldmFsdWF0ZSAsIGFjY2VwdCAsIGFwcGx5ICwgaW1wcm92ZW1lbnQgLCB0ZW1wZXJhdHVyZSAsIGNvb2xkb3duICkge1xuXG5cdGxldCB0ID0gdGVtcGVyYXR1cmUgO1xuXHRsZXQgY2FuZGlkYXRlID0gc29sdXRpb24gO1xuXHRsZXQgY3VycmVudCA9IGJlc3QgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IFsgbXV0YXRpb24gLCBmaXRuZXNzIF0gPSBwaXZvdGluZyggWyBjYW5kaWRhdGUgLCBjdXJyZW50IF0gLCB3YWxrICwgZXZhbHVhdGUgKSA7XG5cblx0XHRpZiAoIGZpdG5lc3MgPj0gY3VycmVudCB8fCBhY2NlcHQoIGZpdG5lc3MgLCBjdXJyZW50ICwgdCApICkge1xuXG5cdFx0XHRjdXJyZW50ID0gZml0bmVzcyA7XG5cdFx0XHRhcHBseSggY2FuZGlkYXRlICwgbXV0YXRpb24gKSA7XG5cblx0XHRcdGlmICggZml0bmVzcyA+IGJlc3QgKSB7XG5cblx0XHRcdFx0YmVzdCA9IGZpdG5lc3MgO1xuXHRcdFx0XHRpbXByb3ZlbWVudCggY2FuZGlkYXRlICkgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHR5aWVsZCBbIGNhbmRpZGF0ZSAsIGN1cnJlbnQgXSA7XG5cblx0XHR0ID0gY29vbGRvd24oIHQgKSA7XG5cblx0fVxuXG59XG4iXX0=