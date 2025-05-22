import React, { useEffect, useState } from "react";
import Reveal from "./Reveal";
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
	url: "https://learn.marcoby.com",
	key: import.meta.env.VITE_GHOST_CONTENT_API_KEY,
	version: "v5.0",
});

interface BlogPost {
	title: string;
	link: string;
	pubDate: string;
	contentSnippet: string;
}

const fetchLatestPosts = async (): Promise<BlogPost[]> => {
	try {
		const posts = await api.posts.browse({ limit: 3, fields: "title,url,published_at,excerpt" });
		return posts.map((post: any) => ({
			title: post.title,
			link: post.url,
			pubDate: post.published_at,
			contentSnippet: post.excerpt,
		}));
	} catch (e) {
		console.error("Error fetching Ghost posts:", e);
		return [];
	}
};

const BlogPreviews: React.FC = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const latestPosts = await fetchLatestPosts();
			setPosts(latestPosts);
			setLoading(false);
		})();
	}, []);

	return (
		<section className="w-full flex flex-col items-center px-3 py-16 bg-white dark:bg-black/80">
			<Reveal>
				<div className="flex flex-col items-center mb-10 gap-6">
					<h2 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] dark:bg-[#e4f0ec20] text-sm ">
						From the Marcoby Blog
					</h2>
					<p className="font-Roboto text-3xl md:text-4xl text-center text-[#013a1f] dark:text-white">
						Latest Insights & Articles
					</p>
				</div>
			</Reveal>
			{loading ? (
				<div className="text-gray-500 font-OpenSans">Loading blog posts...</div>
			) : posts.length === 0 ? (
				<div className="text-red-500 font-OpenSans text-center">
					No blog posts found. The blog feed may be temporarily unavailable.
				</div>
			) : (
				<div className="w-full md:max-w-xl lg:max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
					{posts.map((post, idx) => (
						<Reveal key={idx}>
							<div className="flex flex-col h-full bg-white dark:bg-[#181818] rounded-2xl shadow-lg hover:shadow-2xl transition p-6 border border-[#e4f0ec] dark:border-[#222]">
								<a
									href={post.link}
									target="_blank"
									rel="noopener noreferrer"
									className="font-Roboto text-lg md:text-xl text-[#013a1f] dark:text-white hover:underline mb-2">
									{post.title}
								</a>
								<span className="text-xs text-gray-500 mb-3">{new Date(post.pubDate).toLocaleDateString()}</span>
								<p className="text-sm text-gray-700 leading-6 dark:text-gray-400 flex-1 mb-4">
									{post.contentSnippet}...
								</p>
								<a
									href={post.link}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-auto text-xs font-OpenSans text-[#006837] hover:text-[#00A651] underline">
									Read More
								</a>
							</div>
						</Reveal>
					))}
				</div>
			)}
			<a
				href="https://learn.marcoby.com/"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-8 px-6 py-2 bg-[#006837] text-white rounded-full font-OpenSans text-sm hover:bg-[#00A651] transition">
				See all posts
			</a>
		</section>
	);
};

export default BlogPreviews;
