import { useParams } from "react-router-dom";
import { Book, DataType } from "../types";
import DeleteButton from "../components/DeleteButton";

type BookDetailParams = {
	books: Book[];
	handleDelete: (deletingId: string | undefined, type: DataType) => void;
};

const BookDetails = ({ books, handleDelete }: BookDetailParams) => {
	const { id } = useParams<{ id: string }>();
	const book: Book | undefined = books.find((book) => book.id.toString() == id);

	return (
		<>
			{book ? (
				<section>
					<h1>{book.title}</h1>
					<article>
						<img src={book.cover_img} />
						<h2>
							{book.author.includes("&")
								? `Authors: ${book.author}`
								: `Author: ${book.author}`}
						</h2>
						<h4>{`Year Published: ${book.year_published}`}</h4>
						<p>
							<span style={{ fontWeight: "bold" }}>Description: </span>
							{book.description}
						</p>
						<DeleteButton
							deletingId={id}
							dataType={DataType.Book}
							handleDelete={handleDelete}
						/>
					</article>
				</section>
			) : (
				<h1>Error: Can't find book</h1>
			)}
		</>
	);
};

export default BookDetails;
