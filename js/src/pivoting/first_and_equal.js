/**
 * Returns the first mutation that improves fitness or keeps the same fitness
 * value. If this mutation does not exist, returns null.
 */

const first_and_equal = function ( [ solution , current ] , walk , evaluate ) {

	for ( const mutation of walk( solution ) ) {

		const fitness = evaluate( solution , mutation ) ;

		if ( fitness >= current ) return [ mutation , fitness ] ;

	}

	return [ null , current ] ;

} ;


exports.first_and_equal = first_and_equal ;
