"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.SA = SA;

var _marked = [SA].map(regeneratorRuntime.mark);

/**
 * Simulated Annealing
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzZWFyY2gvU0EuanMiXSwibmFtZXMiOlsiU0EiLCJwaXZvdGluZyIsIndhbGsiLCJldmFsdWF0ZSIsImFjY2VwdCIsImFwcGx5IiwiaW1wcm92ZW1lbnQiLCJ0ZW1wZXJhdHVyZSIsImNvb2xkb3duIiwic29sdXRpb24iLCJiZXN0IiwidCIsImNhbmRpZGF0ZSIsImN1cnJlbnQiLCJtdXRhdGlvbiIsImZpdG5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBS2lCQSxFLEdBQUFBLEU7O2VBQUFBLEU7O0FBSmpCOzs7O0FBSU8sU0FBVUEsRUFBVixPQUFxQ0MsUUFBckMsRUFBZ0RDLElBQWhELEVBQXVEQyxRQUF2RCxFQUFrRUMsTUFBbEUsRUFBMkVDLEtBQTNFLEVBQW1GQyxXQUFuRixFQUFpR0MsV0FBakcsRUFBK0dDLFFBQS9HO0FBQUE7QUFBQSxLQUFpQkMsUUFBakI7QUFBQSxLQUE0QkMsSUFBNUI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsTUFGRSxHQUVFSixXQUZGO0FBR0ZLLGNBSEUsR0FHVUgsUUFIVjtBQUlGSSxZQUpFLEdBSVFILElBSlI7O0FBQUE7QUFBQSxVQU1FLElBTkY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsaUJBUTBCVCxTQUFVLENBQUVXLFNBQUYsRUFBY0MsT0FBZCxDQUFWLEVBQW9DWCxJQUFwQyxFQUEyQ0MsUUFBM0MsQ0FSMUIsNkNBUUdXLFFBUkgsa0JBUWNDLE9BUmQ7OztBQVVMLFNBQUtBLFdBQVdGLE9BQVgsSUFBc0JULE9BQVFXLE9BQVIsRUFBa0JGLE9BQWxCLEVBQTRCRixDQUE1QixDQUEzQixFQUE2RDs7QUFFNURFLGdCQUFVRSxPQUFWO0FBQ0FWLFlBQU9PLFNBQVAsRUFBbUJFLFFBQW5COztBQUVBLFVBQUtDLFVBQVVMLElBQWYsRUFBc0I7O0FBRXJCQSxjQUFPSyxPQUFQO0FBQ0FULG1CQUFhTSxTQUFiO0FBRUE7QUFFRDs7QUF0Qkk7QUFBQSxZQXdCQyxDQUFFQSxTQUFGLEVBQWNDLE9BQWQsQ0F4QkQ7O0FBQUE7O0FBMEJMRixTQUFJSCxTQUFVRyxDQUFWLENBQUo7O0FBMUJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiU0EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogU2ltdWxhdGVkIEFubmVhbGluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogU0EgKCBbIHNvbHV0aW9uICwgYmVzdCBdICwgcGl2b3RpbmcgLCB3YWxrICwgZXZhbHVhdGUgLCBhY2NlcHQgLCBhcHBseSAsIGltcHJvdmVtZW50ICwgdGVtcGVyYXR1cmUgLCBjb29sZG93biApIHtcblxuXHRsZXQgdCA9IHRlbXBlcmF0dXJlIDtcblx0bGV0IGNhbmRpZGF0ZSA9IHNvbHV0aW9uIDtcblx0bGV0IGN1cnJlbnQgPSBiZXN0IDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCBbIG11dGF0aW9uICwgZml0bmVzcyBdID0gcGl2b3RpbmcoIFsgY2FuZGlkYXRlICwgY3VycmVudCBdICwgd2FsayAsIGV2YWx1YXRlICkgO1xuXG5cdFx0aWYgKCBmaXRuZXNzID49IGN1cnJlbnQgfHwgYWNjZXB0KCBmaXRuZXNzICwgY3VycmVudCAsIHQgKSApIHtcblxuXHRcdFx0Y3VycmVudCA9IGZpdG5lc3MgO1xuXHRcdFx0YXBwbHkoIGNhbmRpZGF0ZSAsIG11dGF0aW9uICkgO1xuXG5cdFx0XHRpZiAoIGZpdG5lc3MgPiBiZXN0ICkge1xuXG5cdFx0XHRcdGJlc3QgPSBmaXRuZXNzIDtcblx0XHRcdFx0aW1wcm92ZW1lbnQoIGNhbmRpZGF0ZSApIDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0eWllbGQgWyBjYW5kaWRhdGUgLCBjdXJyZW50IF0gO1xuXG5cdFx0dCA9IGNvb2xkb3duKCB0ICkgO1xuXG5cdH1cblxufVxuIl19