import { create } from "zustand";

interface Post {
	id: number;
	title: string;
	body: string;
}

interface CounterState {
	count: number;
	title: string;
	posts: Post[];
	increment: (value: number) => void;
	getPost: () => Promise<void>;
}

export const useCounterStore = create<CounterState>((set) => ({
	count: 100,
	title: "ta tirao",
	posts: [],
	increment: (value) =>
		set((state) => ({
			count: state.count + value,
		})),
	getPost: async () => {
		const posts = await (
			await fetch("https://jsonplaceholder.typicode.com/posts")
		).json();

		set((state) => ({ ...state, posts: posts }));
		console.log(posts);
	},
}));
