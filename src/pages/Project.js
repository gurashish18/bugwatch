/** @format */

import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Stack } from "@mui/material";

const Project = () => {
	return (
		<>
			<TopBar />
			<Stack>
				<Sidebar />
			</Stack>
		</>
	);
};

export default Project;
