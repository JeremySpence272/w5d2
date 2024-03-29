export enum PageType {
	Home = "Home",
	Books = "Books",
	Websites = "Websites",
}

export enum DataType {
	Book = "Book",
	Website = "Website",
}

export type Book = {
	id: string;
	title: string;
	author: string;
	cover_img?: string;
	year_published: number;
	description: string;
};

export type Website = {
	id: string;
	name: string;
	banner?: string;
	url: string;
	description: string;
};

export type NewRecommendation = {
	recommendationType: DataType;
	book?: Book;
	website?: Website;
};
