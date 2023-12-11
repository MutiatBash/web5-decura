import React from 'react'
import { PrimaryButton } from '../components/Button';
import {Link} from "react-router-dom"
import logo from "/Logo.svg"

const Signup = () => {
  return (
		<section className="flex flex-col justify-center pr-5 lg:pr-16 lg:pb-8 bg-[#3E70E8] h-screen pl-0">
			{/* <div className="flex flex-row justify-between pt-8"> */}
			<div className="flex flex-col justify-center items-center w-[50%] bg-white p-10 lg:p-12 h-full lg:px-24 rounded-br-xl">
				<div className="top-0 self-start">
					<img src={logo} />
				</div>
				<form
					action=""
					// onSubmit={handleSubmit(onSubmit)}
					className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
				>
					<div className="flex flex-col gap-2">
						<h3 className="text-3xl font-bold">Sign Up</h3>
						<p className="">
							Enter your information you entered while registering
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col w-full gap-2">
							<label htmlFor="emailAddress" className="font-medium">
								Email Address
							</label>
							<input
								id="emailAddress"
								type="email"
								className="signup-input-form py-2 px-3 lg:py-3 bg-[#E7E7E7] rounded placeholder:text-[#c5c3c3f0]"
								name="emailAddress"
								placeholder="Enter your email address"
								// {...register("emailAddress", {
								// 	required: "Email is required",
								// 	pattern: {
								// 		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								// 		message: "Invalid email address",
								// 	},
								// })}
							/>
							{/* <span className="text-red text-sm ">
									{errors.emailAddress && errors.emailAddress.message}
								</span> */}
						</div>

						<div className="flex flex-col w-full gap-2">
							<label htmlFor="password" className="font-medium">
								Password
							</label>
							<input
								id="password"
								type="password"
								className=" py-2 px-3 lg:py-3 bg-[#E7E7E7] rounded placeholder:text-[#c5c3c3f0]"
								name="password"
								placeholder="********"
								// {...register("password", {
								// 	required: "Password is required",
								// 	pattern: {
								// 		value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
								// 		message:
								// 			"Password must have at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
								// 	},
								// })}
							/>
							{/* <span className="text-red text-sm ">
									{errors.password && errors.password.message}
								</span> */}
						</div>
						<div>
							<input type="checkbox" /> <span>Remember me</span>
						</div>
					</div>

					<div className="flex flex-col gap-3 text-center">
						<Link to="/dashboard">
							<PrimaryButton
								text="Sign up"
								// className={`w-full shadow`}
								// disabled={loading}
								// text={loading ? "Submitting..." : "Proceed"}
							/>
						</Link>
						<p>
							Already have an account?{" "}
							<Link to="/login" className="text-primaryYellow">
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
			{/* </div> */}
		</section>
  );
}

export default Signup
