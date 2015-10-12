const best = function ( [ solution , best ] , walk , evaluate ) {

	let candidate = null ;

	for ( const mutation of walk( solution ) ) {

		const fitness = evaluate( solution , mutation ) ;

		if ( fitness >= best ) {

			candidate = mutation ;
			best = fitness ;

		}

	}

	return [ candidate , best ] ;

} ;

exports.best = best ;
