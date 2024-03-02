import { Button } from "flowbite-react";

export default function CalltoAction() {
	return (
		<div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
			<div className="flex-1 justify-center flex flex-col">
				<h2 className="text-2xl">Want to learn more about JavaScript?</h2>
				<p className="text-gray-500 my-2">
					Checkout these resources with JavaScript Projects
				</p>
				<Button
					gradientDuoTone="purpleToPink"
					className="rounded-tl-xl rounded-bl-none"
				>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						target="_blank"
						rel="noopener noreferrer"
					>
						JavaScript Resources
					</a>
				</Button>
			</div>
			<div className="p-7 flex-1">
				<img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
			</div>
		</div>
	);
}