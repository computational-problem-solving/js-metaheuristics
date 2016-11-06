
/**
 * Iterative Improvement
 *
 * @param first
 */

export function* II ( [ solution , current ] , pivoting , walk , evaluate , apply ) {

	while ( true ) {

		const [ mutation , fitness ] = pivoting( [ solution , current ] , walk , evaluate ) ;

		if ( mutation === null ) break ;

		apply( solution , mutation ) ;

		yield [ solution , fitness ] ;

		current = fitness ;

	}

}
