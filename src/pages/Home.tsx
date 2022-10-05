import Faq from "../components/Faq/Faq"
import Header from "../components/Header"

function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="py-16 overflow-hidden lg:py-24">
				<div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
					<div className="relative">
						<div className="text-center">
							<h2 className="text-4xl lg:text-6xl font-extrabold text-black dark:text-white ">
								<span className="block">
									Want to Upload Images?
								</span>
								<span className="block text-primary">
									Get started right now.
								</span>
							</h2>
							<p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
								Upload Images of any size you want with just a
								simple click and for free of cost
							</p>
							<div className="lg:mt-0 lg:flex-shrink-0">
								<div className="mt-12 inline-flex rounded-md shadow">
									<button
										type="button"
										className="py-4 px-6  bg-primary hover:bg-opacity-80 focus:ring-primary focus:ring-offset-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full "
									>
										Get started
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="relative mt-32">
						<Faq />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
