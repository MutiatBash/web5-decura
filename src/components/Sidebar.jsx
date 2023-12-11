import React from "react";
import {Link} from "react-router-dom"

const Sidebar = () => {
	return (
		<div className="bg-white w-[20%] p-8 flex flex-col gap-8">
			<Link>
				<div className="flex flex-row items-center gap-4">
					<img src="/menu.svg" /> <span>Overview</span>
				</div>
			</Link>
			<Link>
				<div className="flex flex-row items-center gap-4">
					<img src="/MessageIcon.svg" /> <span>Message</span>
				</div>
			</Link>
			<Link>
				<div className="flex flex-row items-center gap-4">
					<img src="/wallet-bold.svg" /> <span>Wallet</span>
				</div>
			</Link>
			<Link>
				<div className="flex flex-row items-center gap-4">
					<img src="/new_settings.svg" /> <span>Settings</span>
				</div>
			</Link>
		</div>
	);
};

export default Sidebar;
