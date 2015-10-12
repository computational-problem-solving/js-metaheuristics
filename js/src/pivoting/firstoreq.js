const firstoreq = function ( [ solution , best ] , walk , evaluate ) {

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

} ;

exports.firstoreq = firstoreq ;
