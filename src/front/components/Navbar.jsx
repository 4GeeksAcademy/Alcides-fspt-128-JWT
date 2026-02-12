import { Link } from "react-router-dom";

 export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="signup">
					<span className="navbar-brand mb-0 h1">Create User!</span>
				</Link>
				<Link to="/">
				<span className="navbar-brand mb-0 h1"> Back to Login</span>
				</Link>
			</div>
		</nav>
	);
};