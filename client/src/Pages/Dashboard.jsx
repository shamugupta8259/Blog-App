/* eslint-disable no-unused-vars */
// import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../Components/DashSidebar";
import DashProfile from "../Components/DashProfile";
import DashPost from "../Components/DashPost";

const Dashboard = () => {
	const location = useLocation();
	console.log(location);
	const [tab, setTab] = useState("");
	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tabFromUrl = urlParams.get("tab");
		if (tabFromUrl) {
			setTab(tabFromUrl);
		}
	}, [location.search]);
	return (
		<div className="min-h-screen flex flex-col md:flex-row ">
			<div className="md:w-56">
				<DashSidebar />
				{/* sidebar */}
			</div>
			{tab === "profile" && <DashProfile />}
			{/* profile  */}
			{tab === "posts" && <DashPost />}
		</div>
	);
};

export default Dashboard;
