import { useState } from "react";
import { useParams } from "react-router-dom";
import { NewRecommendation, DataType, Book, Website } from "../types";

type AddRecommendationProps = {
	books: Book[];
	websites: Website[];
	setNewRecommendation: (recommendation: NewRecommendation) => void;
};

const AddRecommendation = ({
	books,
	websites,
	setNewRecommendation,
}: AddRecommendationProps) => {
	const { type } = useParams<{ type: string }>();
	const [newBookTitle, setNewBookTitle] = useState<string>("");
	const [newBookAuthors, setNewBookAuthors] = useState<string>(""); //make it possible to add multiple
	const [newBookCoverImg, setNewBookCoverImg] = useState<string | null>(null);
	const [newBookYearPub, setNewBookYearPub] = useState<number>(1999);
	const [newBookDescription, setNewBookDescription] = useState<string>("");

	const handleBookSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const newBook: Book = {
			id: (Number(books[books.length - 1].id) + 1).toString(),
			title: newBookTitle,
			author: newBookAuthors,
			cover_img: newBookCoverImg ?? undefined,
			year_published: newBookYearPub,
			description: newBookDescription,
		};

		const recommendation: NewRecommendation = {
			recommendationType: DataType.Book,
			book: newBook,
		};
		setNewRecommendation(recommendation);
	};

	const [newWebsiteName, setNewWebsiteName] = useState<string>("");
	const [newWebsiteUrl, setNewWebsiteUrl] = useState<string>("");
	const [newWebsiteBanner, setNewWebsiteBanner] = useState<string | null>(null);
	const [newWebsiteDescription, setNewWebsiteDescription] =
		useState<string>("");

	const handleWebsiteSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const newWebsite: Website = {
			id: (Number(websites[websites.length - 1].id) + 1).toString(),
			name: newWebsiteName,
			banner: newWebsiteBanner ?? undefined,
			url: newWebsiteUrl,
			description: newWebsiteDescription,
		};

		const recommendation: NewRecommendation = {
			recommendationType: DataType.Website,
			website: newWebsite,
		};
		setNewRecommendation(recommendation);
	};

	return (
		<>
			{type === "Books" ? (
				<>
					<h1>Add Book</h1>
					<form onSubmit={handleBookSubmit}>
						<input
							id="bookTitle"
							placeholder="Title"
							type="text"
							required
							value={newBookTitle}
							onChange={(e) => setNewBookTitle(e.target.value)}
						/>
						<input
							id="bookAuthors"
							placeholder="Authors"
							type="text"
							required
							value={newBookAuthors}
							onChange={(e) => setNewBookAuthors(e.target.value)}
						/>
						<input
							id="bookCover"
							placeholder="Cover Image URL"
							type="text"
							value={newBookCoverImg ?? ""}
							onChange={(e) => setNewBookCoverImg(e.target.value)}
						/>
						<input
							id="bookYearPub"
							placeholder="Year Published"
							type="number"
							required
							value={newBookYearPub}
							onChange={(e) => setNewBookYearPub(e.target.valueAsNumber)}
						/>
						<input
							id="bookDescription"
							placeholder="Description"
							type="text"
							required
							value={newBookDescription}
							onChange={(e) => setNewBookDescription(e.target.value)}
						/>
						<button type="submit">Submit</button>
					</form>
				</>
			) : type === "Websites" ? (
				<>
					<h1>Add Website</h1>
					<form onSubmit={handleWebsiteSubmit}>
						<input
							id="websiteName"
							placeholder="Website Name"
							type="text"
							required
							value={newWebsiteName}
							onChange={(e) => setNewWebsiteName(e.target.value)}
						/>
						<input
							id="websiteUrl"
							placeholder="Website URL"
							type="text"
							required
							value={newWebsiteUrl}
							onChange={(e) => setNewWebsiteUrl(e.target.value)}
						/>
						<input
							id="websiteBanner"
							placeholder="Website Banner"
							type="text"
							value={newWebsiteBanner ?? ""}
							onChange={(e) => setNewWebsiteBanner(e.target.value)}
						/>

						<input
							id="websiteDescription"
							placeholder="Description"
							type="text"
							required
							value={newWebsiteDescription}
							onChange={(e) => setNewWebsiteDescription(e.target.value)}
						/>
						<button type="submit">Submit</button>
					</form>
				</>
			) : (
				<h1>Something wrong here</h1>
			)}
		</>
	);
};

export default AddRecommendation;
