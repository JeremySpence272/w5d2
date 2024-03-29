// - For books have ability to add new book recommendations & displaying book details
// Implement one lifecycle method for example componentDidMount

import { Route, Routes, useNavigate } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Websites from "./pages/Websites";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";

import { PageType, Book, Website, NewRecommendation, DataType } from "./types";
import BookDetails from "./pages/BookDetails";
import WebsiteDetails from "./pages/WebsiteDetails";
import useFetchData from "./hooks/useFetchData";
import usePostData from "./hooks/usePostData";
import AddRecommendation from "./pages/AddRecommendation";
import useDeleteData from "./hooks/useDeleteData";

const BOOK_ENDPOINT_URL = "http://localhost:8080/books";
const WEBSITE_ENDPOINT_URL = "http://localhost:8080/websites";

function App() {
	const navigate = useNavigate();
	const [activePage, setActivePage] = useState<PageType>(PageType.Home);
	const [books, setBooks] = useState<Book[]>([]);
	const [websites, setWebsites] = useState<Website[]>([]);
	const [newRecommendation, setNewRecommendation] =
		useState<NewRecommendation | null>(null);

	const {
		response: booksResponse,
		isPending: isBooksPending,
		error: booksError,
	} = useFetchData<Book[]>(BOOK_ENDPOINT_URL);
	const {
		response: websitesResponse,
		isPending: isWebsitesPending,
		error: websitesError,
	} = useFetchData<Website[]>(WEBSITE_ENDPOINT_URL);

	const post = usePostData();
	const deleteData = useDeleteData();

	useEffect(() => {
		if (booksResponse && !isBooksPending && !booksError)
			setBooks(booksResponse.data);
	}, [booksResponse, isBooksPending, booksError]);

	useEffect(() => {
		if (websitesResponse && !isWebsitesPending && !websitesError)
			setWebsites(websitesResponse.data);
	}, [websitesResponse, isWebsitesPending, websitesError]);

	useEffect(() => {
		handleAddRecommendation();
	}, [newRecommendation]);

	const handleAddRecommendation = async () => {
		if (
			newRecommendation &&
			newRecommendation.recommendationType === DataType.Book &&
			newRecommendation.book
		) {
			setBooks([...books, newRecommendation.book]);
			await post(BOOK_ENDPOINT_URL, newRecommendation.book);
			navigate(-1);
			setActivePage(PageType.Books);
		} else if (
			newRecommendation &&
			newRecommendation.recommendationType === DataType.Website &&
			newRecommendation.website
		) {
			setWebsites([...websites, newRecommendation.website]);
			await post(WEBSITE_ENDPOINT_URL, newRecommendation.website);
			navigate(-1);
			setActivePage(PageType.Websites);
		}
	};

	const handleDelete = (deletingId: string | undefined, type: DataType) => {
		if (deletingId) {
			if (type === DataType.Book) {
				const updatedBooks = books.filter((book) => book.id !== deletingId);
				setBooks(updatedBooks);
				deleteData(BOOK_ENDPOINT_URL, deletingId);
				navigate("/books");
				setActivePage(PageType.Books);
			} else {
				const updatedWebsites = websites.filter(
					(website) => website.id !== deletingId
				);
				setWebsites(updatedWebsites);
				deleteData(WEBSITE_ENDPOINT_URL, deletingId);
				navigate("/websites");
				setActivePage(PageType.Websites);
			}
		}
	};

	return (
		<div>
			<Nav activePage={activePage} setActivePage={setActivePage} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<Books books={books} />} />
				<Route
					path="/book/:id"
					element={<BookDetails handleDelete={handleDelete} books={books} />}
				/>
				<Route path="/websites" element={<Websites websites={websites} />} />
				<Route
					path="/website/:id"
					element={
						<WebsiteDetails handleDelete={handleDelete} websites={websites} />
					}
				/>
				<Route
					path="/add/:type"
					element={
						<AddRecommendation
							books={books}
							websites={websites}
							setNewRecommendation={setNewRecommendation}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
