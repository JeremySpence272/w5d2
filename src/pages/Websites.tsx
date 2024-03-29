import { Website } from "../types";
import { Link } from "react-router-dom";
import AddRecommendationButton from "../components/AddRecommendationButton";
import { PageType } from "../types";

type WebsiteProps = {
	websites: Website[];
};

const Websites = ({ websites }: WebsiteProps) => {
	return (
		<>
			<h1>Websites</h1>
			<AddRecommendationButton activePage={PageType.Websites} />
			<ul>
				{websites.map((website) => (
					<li key={website.id}>
						<Link to={`/website/${website.id}`}>{website.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Websites;
