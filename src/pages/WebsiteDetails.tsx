import { useParams } from "react-router-dom";
import { DataType, Website } from "../types";
import DeleteButton from "../components/DeleteButton";

type WebsiteDetailParams = {
	websites: Website[];
	handleDelete: (deletingId: string | undefined, type: DataType) => void;
};

const WebsiteDetails = ({ websites, handleDelete }: WebsiteDetailParams) => {
	const { id } = useParams<{ id: string }>();
	const website: Website | undefined = websites.find(
		(website) => website.id.toString() == id
	);

	return (
		<>
			{website ? (
				<section>
					<h1>{website.name}</h1>
					<article>
						<img src={website.banner} />
						<h2>
							<a href={website.url}>{website.url}</a>
						</h2>

						<p>
							<span style={{ fontWeight: "bold" }}>Description: </span>
							{website.description}
						</p>
						<DeleteButton
							deletingId={id}
							dataType={DataType.Book}
							handleDelete={handleDelete}
						/>
					</article>
				</section>
			) : (
				<h1>Error: Can't find website</h1>
			)}
		</>
	);
};

export default WebsiteDetails;
