/** @format */

import React from "react";
import { Stack } from "@mui/material";
import { SidebarItems } from "../data/data";
import { List } from "@phosphor-icons/react";

const Sidebar = () => {
	return (
		<>
			<Stack
				sx={{
					position: "fixed",
					top: "70px",
					height: "calc(100vh - 70px)",
					backgroundColor: "#4CAF93",
					width: "250px",
				}}
				p={2}
			>
				<Stack
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-end",
						cursor: "pointer",
					}}
					gap={2}
					p={2}
					paddingTop={4}
				>
					<List size={30} color={"#ffffff"} />
				</Stack>
				{SidebarItems.map((item) => (
					<Stack
						key={item.id}
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
						}}
						gap={2}
						p={2}
					>
						{item.icon}
						<span
							style={{ fontSize: "16px", fontWeight: "600", color: "#ffffff" }}
						>
							{item.title}
						</span>
					</Stack>
				))}
				;
			</Stack>
		</>
	);
};

export default Sidebar;
