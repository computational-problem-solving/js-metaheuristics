
/**
 * Probabilistic Iterative Improvement
 */

const PII = function* ( [ solution , best ] , random , accept , evaluate , apply ) {

	while ( true ) {

		const mutation = random( solution ) ;

		const fitness = evaluate( solution , mutation ) ;

		if ( fitness >= best || accept( fitness , best ) ) {

			apply( solution , mutation ) ;
			best = fitness ;

		}

		yield [ solution , best ] ;

	}

} ;

exports.PII = PII ;
