
/**
 * Tabu Search
 */

export function* TS ( [ solution , best ] , tabu_is , tabu_set , walk , evaluate , apply ) {

	while ( true ) {

		let candidate = null ;

		for ( const mutation of walk( solution ) ) {

			if ( tabu_is( solution , mutation ) ) continue ;

			const fitness = evaluate( solution , mutation ) ;

			if ( fitness > best ) {

				best = fitness ;
				candidate = mutation ;

			}

		}

		if ( candidate === null ) break ;

		tabu_set( solution , candidate ) ;

		apply( solution , candidate ) ;

		yield [ solution , best ] ;

	}

}
