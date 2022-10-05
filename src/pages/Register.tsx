import { useRef } from "react"
import Header from "../components/Header"

const Register = () => {
	const emailInputElement = useRef<HTMLInputElement>(null)
	const passwordInputElement = useRef<HTMLInputElement>(null)
	const userNameInputElement = useRef<HTMLInputElement>(null)
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = {
			email: emailInputElement,
			password: passwordInputElement,
			userName: userNameInputElement,
		}
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}
		const res = await fetch("/api/auth/register", requestOptions).then(
			(res) => res.json()
		)
		console.log(res)
	}
	
	return (
		<div className="min-h-screen">
			<Header />
			<div className="flex items-center p-4 py-8 m-auto sm:p-8">
				<form className="py-4 mx-auto w-96" onSubmit={handleSubmit}>
					<h1 className="my-6 text-5xl font-black text-center text-primary">
						Register
					</h1>
					<div>
						<div className="flex flex-row items-center justify-between">
							<label
								className="block text-lg font-semibold text-md text-left text-zinc-400 undefined"
								htmlFor="input"
							>
								Email
							</label>
						</div>
						<div className="relative flex mt-1 shadow">
							<input
								ref={emailInputElement}
								required
								name="Email"
								autoCapitalize="none"
								type="email"
								className="block w-full rounded bg-black text-zinc-400 placeholder-zinc-500 border-zinc-700 border focus:ring-0 focus:outline-none"
							/>
						</div>
					</div>

					<div>
						<div className="flex flex-row items-center justify-between">
							<label
								className="block text-lg font-semibold text-md text-left text-zinc-400 undefined"
								htmlFor="input"
							>
								Username
							</label>
						</div>
						<div className="relative flex mt-1 shadow">
							<input
								required
								ref={userNameInputElement}
								name="username"
								autoCapitalize="none"
								type="text"
								className="block w-full rounded bg-black text-zinc-400 placeholder-zinc-500 border-zinc-700 border focus:ring-0 focus:outline-none"
							/>
						</div>
					</div>
					<div>
						<div className="flex mt-3 flex-row items-center justify-between">
							<label
								className="block text-lg font-semibold text-left text-zinc-400 undefined"
								htmlFor="input"
							>
								Password
							</label>
						</div>
						<div className="relative flex mt-1 shadow">
							<input
								required
								ref={passwordInputElement}
								name="password"
								autoCapitalize="none"
								type="password"
								className="block w-full h-10 rounded bg-black text-zinc-400 placeholder-zinc-500 border-zinc-700 border focus:ring-0 focus:outline-none"
							/>
						</div>
					</div>
					<button
						className="w-full my-5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary bg-opacity-90 hover:bg-opacity-100 text-base font-medium text-white transition-all focus:outline-none"
						type="submit"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register
