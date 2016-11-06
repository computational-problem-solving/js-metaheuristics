
/**
 * Variable Neighborhood Descent
 */

export function* VND ( [ solution , best ] , N , neighborhoods ) {

	let k = 0 ;

	while ( k < N ) {

		let n = neighborhoods[k] ;

		let [ mutation , fitness ] = n.pivoting( [ solution , best ] , n.walk , n.evaluate ) ;

		while ( fitness > best ) {

			best = fitness ;
			n.apply( solution , mutation ) ;

			yield [ solution , fitness ] ;

			k = 0 ;
			n = neighborhoods[k] ;
			[ mutation , fitness ] = n.pivoting( [ solution , best ] , n.walk , n.evaluate ) ;

		}

		k += 1 ;

	}

}
