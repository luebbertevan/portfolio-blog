import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Evan Luebbert
			</h1>
			<p className="mb-4">
				{`I am a graduate of Colorado State University with a B.S. in computer science and a minor in mathematics. I recently moved to New York City I am looking for opportunities in the field of computer software to gain experience in a professional setting.

I have always had a certain affinity for creative problem solving and the satisfaction that comes with it. I enjoy hobbies such as rock climbing, making music, table-top rpgs, and playing strategy games all of which require a particular diligence and the ability to think outside the box. As such, computer science gives me the opportunity to exercise these skills and direct them into a career path. I also love fostering kittens!

I look forward to furthering my experience within the field of computer science!`}
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
