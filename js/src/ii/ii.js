
/**
 * Iterative Improvement
 */

var ii = function ( pivoting , delta , solution ) {

	var candidate , d ;

	for ( ; ; ) {

		candidate = pivoting( solution ) ;

		d = delta( candidate , solution ) ;

		if ( d >= 0 ) {
			break ;
		}

		solution = candidate ;
	}

	return solution ;

} ;

exports.ii = ii ;
