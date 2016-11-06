
/**
 * Randomized Iterative Improvement
 */

const RII = function* ( [ solution , best ] , pivote , pivoting , random , walk , apply , evaluate ) {

	while ( true ) {

		if ( pivote( ) ) {

			const [ mutation , fitness ] = pivoting( [ solution , best ] , walk , evaluate ) ;

			if ( mutation !== null ) {
				apply( solution , mutation ) ;
				best = fitness ;
			}

		}

		else {

			const mutation = random( candidate ) ;

			best = evaluate( solution , mutation ) ;

			apply( solution , mutation ) ;

		}

		yield [ solution , best ] ;

	}

} ;

exports.RII = RII ;
