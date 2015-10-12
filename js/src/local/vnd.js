const vnd = function* ( [ solution , best ] , N , neighborhoods ) {

	let k = 0 ;

	while ( k < N ) {

		const n = neighborhoods[k] ;

		let [ mutation , fitness ] = n.pivoting( solution , n.walk , n.evaluate ) ;

		while ( fitness > best ) {

			best = fitness ;
			n.apply( solution , mutation ) ;

			yield [ solution , fitness ] ;

			k = 0 ;
			[ mutation , fitness ] = n.pivoting( solution , n.walk , n.evaluate ) ;

		}

		k += 1 ;

	}

} ;

exports.vnd = vnd ;
