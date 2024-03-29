const Home = () => {
	return (
		<>
			<h1>Hello World</h1>
			<div className="home">
				<p>This is an assignment for W5D2 justice through code program.</p>
				<p>If you're having any issues running the local JSON Server:</p>
				<p>
					Install it with <code>npm i json-server</code>
				</p>
				<p>
					Run the server locally with{" "}
					<code>json-server ./data/data.json --port 8080</code>
				</p>
				<p>
					Make sure you're running it on port 8080 or you can change the
					endpoint URLs in App.tsx
				</p>
			</div>
		</>
	);
};

export default Home;
