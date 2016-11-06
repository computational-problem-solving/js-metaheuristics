/**
 * Returns the first mutation that improves the fitness value. If such a
 * mutation does not exist, returns the last mutation that keeps fitness the
 * same, or null.
 *
 * @param first
 */

export function first_or_equal ( [ solution , best ] , walk , evaluate ) {

	let candidate = null ;

	for ( const mutation of walk( solution ) ) {

		const fitness = evaluate( solution , mutation ) ;

		if ( fitness > best ) return [ mutation , fitness ] ;

		if ( fitness === best ) {

			candidate = mutation ;
			best = fitness ;

		}

	}

	return [ candidate , best ] ;

}
