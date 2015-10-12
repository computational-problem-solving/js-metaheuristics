const firstandeq = function ( [ solution , current ] , walk , evaluate ) {

	for ( const mutation of walk( solution ) ) {

		const fitness = evaluate( solution , mutation ) ;

		if ( fitness >= current ) return [ mutation , fitness ] ;

	}

	return [ null , current ] ;

} ;


exports.firstandeq = firstandeq ;
