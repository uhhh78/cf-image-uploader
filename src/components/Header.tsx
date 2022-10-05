import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import ChatIcon from "./icons/ChatIcon"
import SignUpIcon from "./icons/SignUpIcon"
import UserIcon from "./icons/UserIcon"

const Header = () => {
	return (
		<div className="w-full mb-5 flex flex-row items-center justify-center sticky top-0 z-30">
			<div className="w-full px-5 lg:px-6 py-5 flex flex-row items-center justify-between">
				<div className="hover:opacity-80 cursor-pointer flex items-center transition-all">
					<div className="w-12 h-12 ml-1 mr-3 rounded-full transition-all bg-primary" />
				</div>
				<div className="relative inline-flex text-left">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="flex hover:opacity-80 items-center justify-center w-11 h-11 bg-primary rounded-full">
								<UserIcon className="h-5 text-gray-900" />
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-[#141414] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="px-1 py-1 ">
									<Menu.Item>
										<button className="hover:bg-primary font-semibold hover:text-black text-white group flex w-full items-center rounded-md px-2 py-2 text-md ">
											<UserIcon className="w-8 h-5 text-primary group-hover:text-black mr-2" />
											Login
										</button>
									</Menu.Item>
									<Menu.Item>
										<button className="hover:bg-primary font-semibold hover:text-black text-white group flex w-full items-center rounded-md px-2 py-2 text-md ">
											<SignUpIcon className="w-8 h-6 text-primary group-hover:text-black mr-2 ml-[1]" />
											Sign Up
										</button>
									</Menu.Item>
									<Menu.Item>
										<button className="hover:bg-primary font-semibold hover:text-black text-white group flex w-full items-center rounded-md px-2 py-2 text-md ">
											<ChatIcon className="w-8 h-6 text-primary group-hover:text-black mr-2 ml-[1]" />
											Join Discord
										</button>
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	)
}

export default Header
