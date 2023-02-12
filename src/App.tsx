import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

function App() {
	/* const data = useCounterStore(); */

	/* 	const count = useCounterStore((state) => state.count); */

	const { title, count, posts } = useCounterStore(
		(state) => ({
			count: state.count,
			title: state.title,
			posts: state.posts,
		}),
		shallow
	);

	const { increment, getPost } = useCounterStore();

	useEffect(() => {
		getPost();
	}, []);

	return (
		<main>
			<header>
				<h1>Título: {title}</h1>
				<h2>Contador {count}</h2>
				<button onClick={() => increment(5)}>Click me</button>
			</header>

			<section>
				<ul>
					{posts.map(({ id, title, body }) => (
						<li key={id}>
							<h4>{title}</h4>
							<h5>{body}</h5>
						</li>
					))}
				</ul>
			</section>
		</main>
	);

	/* return <div className="">{data.count}</div>; */
	/* return <div className="">{count}</div>; */
}

export default App;
