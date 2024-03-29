import { Link } from "react-router-dom";
import { PageType } from "../types";

type NavProps = {
	activePage: PageType;
	setActivePage: (page: PageType) => void;
};

const Nav = ({ activePage, setActivePage }: NavProps) => {
	return (
		<nav>
			<Link
				to="/"
				className={`button ${activePage === PageType.Home ? "active" : ""}`}
				onClick={() => setActivePage(PageType.Home)}
			>
				Home 🏠
			</Link>
			<Link
				to="/books"
				className={`button ${activePage === PageType.Books ? "active" : ""}`}
				onClick={() => setActivePage(PageType.Books)}
			>
				Books 📚
			</Link>
			<Link
				to="/websites"
				className={`button ${activePage === PageType.Websites ? "active" : ""}`}
				onClick={() => setActivePage(PageType.Websites)}
			>
				Websites 🧑‍💻
			</Link>
		</nav>
	);
};

export default Nav;
