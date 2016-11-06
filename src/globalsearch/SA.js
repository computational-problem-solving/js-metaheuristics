
/**
 * Simulated Annealing
 *
 * @param first
 */

export function* SA ( [ solution , best ] , pivoting , walk , evaluate , accept , apply , improvement , temperature , cooldown ) {

	let t = temperature ;
	let candidate = solution ;
	let current = best ;

	while ( true ) {

		const [ mutation , fitness ] = pivoting( [ candidate , current ] , walk , evaluate ) ;

		if ( fitness >= current || accept( fitness , current , t ) ) {

			current = fitness ;
			apply( candidate , mutation ) ;

			if ( fitness > best ) {

				best = fitness ;
				improvement( candidate ) ;

			}

		}

		yield [ candidate , current ] ;

		t = cooldown( t ) ;

	}

}
