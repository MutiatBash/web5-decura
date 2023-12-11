import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
	return (
		<div className="flex flex-row bg-[#F8F8FF] h-full">
			<Sidebar />
			<div className="p-10">
				<div className="flex flex-row gap-8">
					<h3 className="text-2xl font-semibold">Welcome, Michael!</h3>
					<div className="bg-white rounded p-2">
						<img src="/search.svg" className="w-[60%] mx-auto" />
					</div>
				</div>
				<div className="w-[60%]">
					<img src="/report.svg" />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
