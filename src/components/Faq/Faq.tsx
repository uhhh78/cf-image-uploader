import FaqDisclosure from "./FaqDisclosure"
const faqsList = [
	{
		q: "Is there any upload limit?",
		a: "No you can have unlimited uploads until we ran out of storage ;)",
	},
	{
		q: "Is there any file size limit?",
		a: "Yes we have a file size limit of 8 mb but you can exceed it upto 50 mb by donating",
	},
	{
		q: "Can I upload using your API?",
		a: "Yes! If you can figure it out. No help will be provided in that.",
	},
]

export default () => {
	return (
		<section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
			<div className="space-y-3 text-center">
				<h1 className="text-5xl text-primary font-bold">
					Frequently Asked Questions
				</h1>
				<p className="text-gray-400 max-w-lg mx-auto text-lg">
					Answered all frequently asked questions, Still confused?
					feel free to contact us.
				</p>
				<div className="mt-14 max-w-2xl mx-auto">
					{faqsList.map((data) => (
						<FaqDisclosure q={data.q} a={data.a} />
					))}
				</div>
			</div>
		</section>
	)
}
