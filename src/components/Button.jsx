import React from 'react'

export const PrimaryButton = ({ text, className, onClick, type, disabled }) => {
	return (
		<div>
			<button
				disabled={disabled}
				type={type}
				onClick={onClick}
				className={`gap-2 w-[fit-content] py-[0.8rem] px-2 rounded whitespace-nowrap text-white text-base bg-[#3E70E8] font-semibold md:py-[0.6875rem] md:px-5 hover:shadow-md transition-all ease-in cursor-pointer ${className} ${
					disabled ? "bg-gray text-lightGray" : ""
				}`}
			>
				{text}
			</button>
		</div>
	);
};

