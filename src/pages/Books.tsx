import { useEffect } from "react";
import AddRecommendationButton from "../components/AddRecommendationButton";
import { Book, PageType } from "../types";
import { Link } from "react-router-dom";

type BookProps = {
	books: Book[];
};

const Books = ({ books }: BookProps) => {
	useEffect(() => {
		console.log(books);
	}, [books]);
	return (
		<>
			<h1>Books</h1>
			<AddRecommendationButton activePage={PageType.Books} />
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						<Link to={`/book/${book.id}`}>{book.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Books;
