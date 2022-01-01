// Page - Not Found

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';

function PageNotFound () {

	return (
		<section>
			<h2>404 :'(</h2>
			<p>Page not found..</p>
			<p>Navigate to <Link to="/">Home</Link> page.</p>
		</section>
	);
	
};

export default PageNotFound;