
var __vnd__ = function(neighborhoods, n, delta){

	var vnd = function(solution){

		var k, pivoting, candidate;

		k = 0;

		while(k < n){
			for (;;) {
				pivoting = neighborhoods[k];
				candidate = pivoting(solution);
				d = delta(candidate, solution);
				if (d >= 0) {
					break;
				}
				k = 0;
				solution = candidate;
			}
			++k;
		}

	};

	return vnd;

};

exports.__vnd__ = __vnd__;