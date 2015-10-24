
/**
 * Iterative Improvement
 */

const ii = function* ( [ solution , current ] , pivoting , walk , evaluate , apply ) {

	while ( true ) {

		const [ mutation , fitness ] = pivoting( [ solution , current ] , walk , evaluate ) ;

		if ( mutation === null ) break ;

		apply( solution , mutation ) ;

		yield [ solution , fitness ] ;

		current = fitness ;

	}

} ;

exports.ii = ii ;
