import { Disclosure } from "@headlessui/react"
import ChevronUpIcon from "../icons/ChevronUpIcon"

const FaqDisclosure = ({ q, a }: { q: string; a: string }) => {
	return (
		<>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full group justify-between rounded-lg bg-black px-4 py-2 text-left text-sm font-medium text-primary hover:text-black hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
							<span className="text-md">{q}</span>
							<ChevronUpIcon
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-primary group-hover:text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-400">
							{a}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	)
}
export default FaqDisclosure
