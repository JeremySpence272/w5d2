import { PageType } from "../types";
import { Link } from "react-router-dom";

type AddRecommendationProps = {
	activePage: PageType;
};

const AddRecommendationButton = ({ activePage }: AddRecommendationProps) => {
	return (
		<Link className="recommendation-button button" to={`/add/${activePage}`}>
			Add Recommendation{" "}
		</Link>
	);
};

export default AddRecommendationButton;
